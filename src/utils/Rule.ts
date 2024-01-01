import { v4 as uuidv4 } from 'uuid';
import {
   ColorEnum,
   LocalStorageRules,
   RuleType,
   SubRule,
   UpdateRuleType,
   actionRule,
} from '../types';
import Storage from './Storage';
import TabUtil from './TabUtil';
import UrlUtil from './UrlUtil';

/**
 * User created rule to create tab groups depending on url
 * @param title
 * @param action
 * @param subRules
 * @param id
 * @param groupName
 * @param groupColor
 */

class Rule {
   static ruleStorage: Storage = new Storage('rules');
   private _title: string;
   private _action: actionRule;
   private _subRules: SubRule[];
   private _id: string;
   private _groupName?: string;
   private _groupColor?: ColorEnum;
   private _active: boolean;

   constructor(
      title: string,
      action: actionRule,
      subRules: SubRule[] = [],
      id: string = uuidv4(),
      active: boolean,
      groupName?: string,
      groupColor?: ColorEnum
   ) {
      this._title = title;
      this._action = action;
      this._subRules = subRules;
      this._id = id;
      this._active = active;
      this._groupName = groupName;
      this._groupColor = groupColor;
   }

   get title() {
      return this._title;
   }

   get subRules() {
      return this._subRules;
   }

   set subRules(subRules: SubRule[]) {
      this._subRules = subRules;
   }

   get action() {
      return this._action;
   }

   get id() {
      return this._id;
   }

   get groupName() {
      return this._groupName;
   }

   get groupColor() {
      return this._groupColor;
   }

   get active() {
      return this._active;
   }

   set active(isActive: boolean) {
      this._active = isActive;
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
         ruleData.active,
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
    * Formats text to show in UI based on set action
    */
   public formatActionText(): string {
      switch (this.action) {
         case 0:
            return `Add tab to group '${this.groupName}'`;
         case 1:
            return 'Open tab in new window';
         case 2:
            return 'Pin tab';
         default:
            throw new Error(
               `Action for rule of ${this.action} does not exist.`
            );
      }
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
      if (this.active) {
         const urlUtil = new UrlUtil(url);
         let foundMatch = false;
         this.subRules.forEach((subRule: SubRule) => {
            if (Rule.handleSubRule(subRule, urlUtil)) {
               foundMatch = true;
            }
         });
         return foundMatch;
      }
      return false;
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
    * Creates formatted string to use in UI for given subrule
    * @param subRule subrule containing url, match and query keys
    * @returns formatted string
    */
   public static formatSubRuleText(subRule: SubRule): string {
      let urlText = 'URL ';
      if (subRule.url != 'any') urlText += subRule.url;
      urlText += ` ${subRule.match} '${subRule.query}'`;
      return urlText;
   }

   /**
    * object with data that is saved into chrome storage
    * @returns RuleType object that is used to save into local storage
    */
   public getData(): RuleType {
      return {
         title: this.title,
         action: this.action,
         groupName: this.groupName,
         id: this.id,
         groupColor: this.groupColor,
         subRules: this.subRules,
         active: this.active,
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
      if (await this.doesIDExist()) {
         delete savedRules[this.id];
         console.log('here in rule.delete();');
         await Rule.ruleStorage.set(savedRules);
      } else {
         throw new Error(`Given id does not exist in storage: ${this.id}`);
      }
   }

   /**
    * Updates rule in storage with new settings
    * @param updateInfo object containing values to update in storage for given rule ID
    */
   public async update(updateInfo: UpdateRuleType) {
      if (await this.doesIDExist()) {
         const savedRules = await Rule.ruleStorage.get();
         const currentData = savedRules[this.id] as RuleType;
         Object.assign(currentData, updateInfo);
         Object.defineProperty(savedRules, this.id, { value: currentData });
         await Rule.ruleStorage.set(savedRules);
      } else {
         throw new Error(`Given id does not exist in storage: ${this.id}`);
      }
   }

   /**
    * Check if this.id exists in local storage
    * @returns true if current ID exists as rule in local storage
    */
   private async doesIDExist(): Promise<boolean> {
      const savedRules = await Rule.ruleStorage.get();
      return this.id in savedRules;
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
    * todo Adds new subrule to rules array
    * @param subrule SubRule interface with query, match, and url keys
    */
   public addSubRule(subrule: SubRule) {
      this.subRules.push(subrule);
   }

   /**
    * Deletes subrule from current rule and updates storage
    * @param id ID of subrule to delete
    */
   public async deleteSubRule(id: string) {
      if (this.subRuleExists(id)) {
         const updatedRules = this.subRules.filter((subRule: SubRule) => {
            return subRule.id != id;
         });
         this.subRules = updatedRules;
         await this.update({ subRules: updatedRules });
      } else {
         throw new Error(
            `No subrule exists with id of ${id} in rule with ID of ${this.id}`
         );
      }
   }

   /**
    * Finds if a subrule exists in this rule with the given id
    * @param id the ID of the subrule to delete
    * @returns true if subrule is found, false otherwise
    */
   private subRuleExists(id: string): boolean {
      let doesExist = false;
      this.subRules.forEach((subRule: SubRule) => {
         if (subRule.id == id) {
            doesExist = true;
         }
      });
      return doesExist;
   }
}

export default Rule;
