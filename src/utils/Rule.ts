import { v4 as uuidv4 } from 'uuid';
import {
   ColorEnum,
   LocalStorageRules,
   RuleType,
   SubRule,
   actionRule,
} from '../types';
import Storage from './Storage';
import TabUtil from './TabUtil';
import UrlUtil from './UrlUtil';

/**
 * TODO user created rule to create tab groups depending on url
 * @param title
 * @param action
 * @param subRules
 * @param id
 * @param groupName
 * @param groupColor
 */
class Rule {
   static ruleStorage: Storage = new Storage('rules');
   private title: string;
   private action: actionRule;
   private subRules: SubRule[];
   private id: string;
   private groupName?: string;
   private groupColor?: ColorEnum;

   constructor(
      title: string,
      action: actionRule,
      subRules: SubRule[] = [],
      id: string = uuidv4(),
      groupName?: string,
      groupColor?: ColorEnum
   ) {
      this.title = title;
      this.action = action;
      this.subRules = subRules;
      this.id = id;
      this.groupName = groupName;
      this.groupColor = groupColor;
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
         ruleData.id,
         ruleData.groupName,
         ruleData.groupColor
      );
   }

   /**
    * Static method that searches for matches for current tab, and running action for matches found
    * @param tabId id of current tab
    * @returns void
    */
   public static async findMatch(tabId: number): Promise<void> {
      const tab = await TabUtil.build(tabId);
      const url = tab.getUrl();
      const rules = await this.getAll();
      rules.forEach((rule: Rule) => {
         if (rule.isMatch(url)) {
            rule.run(tab);
         }
      });
   }

   /**
    * Get all currently saved rules from local storage as built Rule instances
    * @returns array of Rule instances
    */
   public static async getAll(): Promise<Rule[]> {
      const allRules = (await Rule.ruleStorage.get()) as LocalStorageRules;
      const result = Object.values(allRules).map((ruleData: RuleType) => {
         return Rule.build(ruleData);
      });
      return result;
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
         id: this.id,
         groupColor: this.groupColor,
         subRules: this.subRules,
      };
   }

   /**
    * Saves rule to storage
    */
   public async save() {
      const data = this.getData();
      const rules = await Rule.ruleStorage.get();
      let doesExist = false;
      Object.values(rules).forEach((ruleData: RuleType) => {
         if (data.id == ruleData.id) {
            doesExist = true;
         } else if (data.title == ruleData.title) {
            doesExist = true;
         }
      });
      if (doesExist) {
         throw new Error(
            `Unable to save rule to storage: given id or title exists.`
         );
      } else {
         Rule.ruleStorage.add(this.id, data);
      }
   }

   /**
    * Deletes this rule from local storage
    */
   public async delete(): Promise<void> {
      const savedRules = await Rule.ruleStorage.get();
      if (this.id in savedRules) {
         delete savedRules[this.id];
         await Rule.ruleStorage.set(savedRules);
      } else {
         throw new Error(`Given rule ID does not exist in local storage.`);
      }
   }

   /**
    * TODO
    * Updates rule in storage with new settings
    */
   public update() {
      console.log('here in update');
      //
   }

   /**
    * run action for current rule
    * @param tab TabUtil instance
    * @returns void
    */
   public run(tab: TabUtil) {
      switch (this.action) {
         case 0:
            tab.openInGroup(this.groupColor, this.groupName);
            break;
         case 1:
            tab.moveToNewWindow();
            break;
         case 2:
            tab.pin();
            break;
         default:
            return;
      }
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
