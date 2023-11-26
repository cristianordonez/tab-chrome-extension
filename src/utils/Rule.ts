import { ColorEnum, RuleType, SubRule, actionRule } from '../types';
import Storage from './Storage';
import TabUtil from './TabUtil';
import UrlUtil from './UrlUtil';

/**
 * todo User created rule to create tab groups depending on url
 */
class Rule {
   static ruleStorage: Storage = new Storage('rules');
   private title: string;
   private action: actionRule;
   private groupName?: string;
   private groupColor?: ColorEnum;
   private subRules: SubRule[];

   constructor(
      title: string,
      action: actionRule,
      groupName?: string,
      groupColor?: ColorEnum,
      subRules: SubRule[] = []
   ) {
      this.title = title;
      this.action = action;
      this.groupName = groupName;
      this.groupColor = groupColor;
      this.subRules = subRules;
   }

   public static build(ruleData: RuleType): Rule {
      return new Rule(
         ruleData.title,
         ruleData.action,
         ruleData.groupName,
         ruleData.groupColor,
         ruleData.subRules
      );
   }

   /**
    * static method that searches for matches, and runs action for any matches found
    * @param tabId id of current tab
    * @returns true if match was found, false otherwise
    */
   public static async findMatch(tabId: number): Promise<boolean> {
      // const rule = new Rule('test rule 1', 0, 'stackoverflow', 'red', [
      //    { url: 'hostname', match: 'contains', query: 'stackoverflow' },
      // ]);
      // rule.save();
      const tab = await TabUtil.build(tabId);
      const url = tab.getUrl();
      const rules = await this.ruleStorage.get();
      let matchFound = false;
      Object.values(rules).forEach((ruleData: RuleType) => {
         const rule = Rule.build(ruleData);
         if (rule.isMatch(url)) {
            matchFound = true;
            rule.run(tabId);
         }
      });
      return matchFound;
   }

   public isMatch(url: string): boolean {
      const urlUtil = new UrlUtil(url);
      let foundMatch = false;
      this.subRules.forEach((subRule: SubRule) => {
         if (this.handleSubRule(subRule, urlUtil)) {
            foundMatch = true;
         }
      });
      return foundMatch;
   }

   private handleSubRule(subRule: SubRule, urlUtil: UrlUtil): boolean {
      const currentUrl = this.extractUrl(subRule, urlUtil);
      console.log('currentUrl: ', currentUrl);
      switch (subRule.match) {
         case 'contains':
            return currentUrl.includes(subRule.query);
         case 'starts with':
            return currentUrl.startsWith(subRule.query);
         case 'ends with':
            return currentUrl.endsWith(subRule.query);
         case 'is equal to':
            return currentUrl == subRule.query;
         default:
            return false;
      }
   }

   /**
    * @param subRule object containing url, match, and query keys
    * @param urlUtil UrlUtil class instance
    * @returns corresponding part of url for given subrule
    */
   private extractUrl(subRule: SubRule, urlUtil: UrlUtil): string {
      switch (subRule.url) {
         case 'any':
            return urlUtil.getUrl();
         case 'hostname':
            return urlUtil.hostname();
         case 'path':
            return urlUtil.path();
         case 'query':
            return urlUtil.query();
         default:
            return urlUtil.getUrl();
      }
   }

   private getData(): RuleType {
      return {
         title: this.title,
         action: this.action,
         groupName: this.groupName,
         groupColor: this.groupColor,
         subRules: this.subRules,
      };
   }

   /**
    * TODO
    * Saves rule to storage
    */
   public save() {
      // this.ruleStorage.add(this.title, )
      const value = this.getData();
      Rule.ruleStorage.add(this.title, value);
   }

   /**
    * TODO
    * Deletes this rule from storage
    */
   public delete() {}

   /**
    * TODO
    * Updates rule in storage with new settings
    */
   public update() {}

   /**
    * TODO
    * Runs action saved to given rule
    */
   public run(tabId: number) {
      console.log('tabId: ', tabId);
      console.log('this.action: ', this.action);
      return;
   }

   /**
    * Adds new subrule to rules array
    * @param subrule SubRule with query, match, and url
    */
   public addSubRule(subrule: SubRule) {
      this.subRules?.push(subrule);
   }
}

export default Rule;
