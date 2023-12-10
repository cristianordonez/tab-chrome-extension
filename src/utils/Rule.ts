import { ColorEnum, RuleType, SubRule, actionRule } from '../types';
import Storage from './Storage';
import TabUtil from './TabUtil';
import UrlUtil from './UrlUtil';

/**
 * TODO user created rule to create tab groups depending on url
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
      subRules: SubRule[] = [],
      groupName?: string,
      groupColor?: ColorEnum
   ) {
      this.title = title;
      this.action = action;
      this.groupName = groupName;
      this.groupColor = groupColor;
      this.subRules = subRules;
   }

   /**
    * Uses RuleType object to build new class. Used since RuleType objects are stored in storage
    * @param ruleData Object containing attributes needed to build new Rule instance
    * @returns new Rule instance
    */
   public static build(ruleData: RuleType): Rule {
      return new Rule(
         ruleData.title,
         ruleData.action,
         ruleData.subRules,
         ruleData.groupName,
         ruleData.groupColor
      );
   }

   /**
    * Static method that searches for matches for current tab, and running action for matches found
    * @param tabId id of current tab
    * @returns Rule instance or undefined if no match was found
    */
   public static async findMatch(tabId: number): Promise<void> {
      // const rule = new Rule('test rule 2', 0, [
      //    { url: 'query', match: 'contains', query: 'mdn' },
      //    { url: 'path', match: 'is equal to', query: 'w3schools' },
      // ]);
      // rule.save();

      const tab = await TabUtil.build(tabId);
      const url = tab.getUrl();
      const rules = await this.ruleStorage.get();
      Object.values(rules).forEach((ruleData: RuleType) => {
         const rule = Rule.build(ruleData);
         if (rule.isMatch(url)) {
            rule.run(tab);
         }
      });
   }

   /**
    * Determines if url is a match for any existing sub rule
    * @param url full url string
    * @returns true if url matches any subrule for this rule
    */
   public isMatch(url: string): boolean {
      const urlUtil = new UrlUtil(url);
      let foundMatch = false;
      this.subRules.forEach((subRule: SubRule) => {
         if (Rule.handleSubRule(subRule, urlUtil)) {
            foundMatch = true;
         }
      });
      return foundMatch;
   }

   /**
    * @param subRule SubRule interface
    * @param urlUtil UrlUtil class instance
    * @returns true if urlUtil is match for given subrule
    */
   private static handleSubRule(subRule: SubRule, urlUtil: UrlUtil): boolean {
      const currentUrl = this.extractUrl(subRule, urlUtil);
      console.log('urlUtil.getUrl(): ', urlUtil.getUrl());
      console.log('currentUrl: ', currentUrl);
      console.log('subRule: ', subRule);
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
   private static extractUrl(subRule: SubRule, urlUtil: UrlUtil): string {
      switch (subRule.url) {
         case 'any':
            return urlUtil.getUrl();
         case 'hostname':
            return urlUtil.hostname();
         case 'path':
            return urlUtil.pathname();
         case 'query':
            return urlUtil.query();
         default:
            return urlUtil.getUrl();
      }
   }

   /**
    * object with data that is saved into chrome storage
    * @returns RuleType object that is used to save into local storage
    */
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
   public run(tab: TabUtil) {
      console.log('this.action: ', this.action);
      console.log('tab: ', tab);
      return;
   }

   /**
    * Adds new subrule to rules array
    * @param subrule SubRule interface with query, match, and url keys
    */
   public addSubRule(subrule: SubRule) {
      this.subRules.push(subrule);
   }
}

export default Rule;
