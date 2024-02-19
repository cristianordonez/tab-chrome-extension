import { v4 as uuidv4 } from 'uuid';
import {
   AllConditionGroupsType,
   ColorEnum,
   ConditionGroupType,
   ConditionType,
   LocalStorageRules,
   RuleType,
   actionRule,
} from '../types';
import Storage from './Storage';
import TabUtil from './TabUtil';
import UrlUtil from './UrlUtil';

/**
 * User created rule to create tab groups depending on url
 * @param title
 * @param action
 * @param conditions
 * @param id
 * @param groupName
 * @param groupColor
 */

class Rule {
   static ruleStorage: Storage = new Storage('rules');
   private _title: string;
   private _action: actionRule;
   private _conditionGroups: AllConditionGroupsType;
   private _id: string;
   private _groupName?: string;
   private _groupColor?: ColorEnum;
   private _active: boolean;

   constructor(
      title: string,
      action: actionRule,
      conditionGroups: AllConditionGroupsType,
      id: string = uuidv4(),
      active: boolean = true,
      groupName?: string,
      groupColor?: ColorEnum
   ) {
      this._title = title;
      this._action = action;
      this._conditionGroups = conditionGroups;
      this._id = id;
      this._active = active;
      this._groupName = groupName;
      this._groupColor = groupColor;
   }

   get title() {
      return this._title;
   }

   get conditionGroups() {
      return this._conditionGroups;
   }

   set conditionGroups(conditionGroups: AllConditionGroupsType) {
      this._conditionGroups = conditionGroups;
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
    * Search for rule in storage by rule ID
    * @param id rule id to search for
    * @returns Rule or undefined if no rules with given id exist
    */
   public static async getById(id: string): Promise<Rule | undefined> {
      const allRules = await this.getAll();
      const result = allRules.find((rule) => rule.id == id);
      return result;
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
         ruleData.conditionGroups,
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
    * Determines if url is a match for any existing condition
    * @param url full url string
    * @returns true if url matches any condition for this rule
    */
   public isMatch(url: string): boolean {
      if (this.active) {
         const urlUtil = new UrlUtil(url);
         if (this.conditionGroups.all_required) {
            let foundMatch = true;
            this.conditionGroups.groups.forEach((group: ConditionGroupType) => {
               if (this.handleGroup(group, urlUtil) === false) {
                  foundMatch = false;
               }
            });
            return foundMatch;
         } else {
            let foundMatch = false;
            this.conditionGroups.groups.forEach((group: ConditionGroupType) => {
               if (this.handleGroup(group, urlUtil)) {
                  foundMatch = true;
               }
            });
            return foundMatch;
         }
      }
      return false;
   }

   private handleGroup(group: ConditionGroupType, urlUtil: UrlUtil): boolean {
      if (group.all_required) {
         let foundMatch = true;
         group.conditions.forEach((condition: ConditionType) => {
            if (Rule.handleCondition(condition, urlUtil) === false) {
               foundMatch = false;
            }
         });
         return foundMatch;
      } else {
         let foundMatch = false;
         group.conditions.forEach((condition: ConditionType) => {
            if (Rule.handleCondition(condition, urlUtil)) {
               foundMatch = true;
            }
         });
         return foundMatch;
      }
   }

   /**
    * @param condition ConditionType interface
    * @param urlUtil UrlUtil class instance
    * @returns true if urlUtil is match for given condition
    */
   private static handleCondition(
      condition: ConditionType,
      urlUtil: UrlUtil
   ): boolean {
      const currentUrl = this.extractUrl(condition, urlUtil);
      switch (condition.match) {
         case 'contains':
            return currentUrl.includes(condition.query);
         case 'starts with':
            return currentUrl.startsWith(condition.query);
         case 'ends with':
            return currentUrl.endsWith(condition.query);
         case 'is equal to':
            return currentUrl == condition.query;
         default:
            return false;
      }
   }

   /**
    * @param condition object containing url, match, and query keys
    * @param urlUtil UrlUtil class instance
    * @returns corresponding part of url for given condition
    */
   private static extractUrl(
      condition: ConditionType,
      urlUtil: UrlUtil
   ): string {
      switch (condition.url) {
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
    * Creates formatted string to use in UI for given condition
    * @param condition condition containing url, match and query keys
    * @returns formatted string
    */
   public static formatConditionText(condition: ConditionType): string {
      let urlText = 'URL ';
      if (condition.url != 'any') urlText += condition.url;
      urlText += ` ${condition.match} '${condition.query}'`;
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
         conditionGroups: this.conditionGroups,
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
         await Rule.ruleStorage.set(savedRules);
      } else {
         throw new Error(`Given id does not exist in storage: ${this.id}`);
      }
   }

   /**
    * Updates rule in storage with new settings
    * @param updateInfo object containing values to update in storage for given rule ID
    */
   public async update(updateInfo: Partial<RuleType>) {
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
   private run(tab: TabUtil) {
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
    * Deletes condition from current rule and updates storage
    * @param id ID of condition to delete
    * @param groupId ID of group condition is in
    */
   public async deleteCondition(groupId: string, id: string) {
      const groupIndex = this.getConditionGroupIndex(groupId);
      const conditionIndex = this.getConditionIndex(groupId, id);
      if (groupIndex != -1 && conditionIndex != -1) {
         const updatedConditionGroups = this.conditionGroups;
         updatedConditionGroups.groups[groupIndex].conditions.splice(
            conditionIndex,
            1
         );
         this.conditionGroups = updatedConditionGroups;
         await this.update({ conditionGroups: updatedConditionGroups });
      } else {
         throw new Error(
            `No condition exists with id of ${id} and group ID ${groupId} in rule with ID of ${this.id}`
         );
      }
   }

   /**
    * Adds condition to given group and updates local storage
    * @param groupId id of group to add condition to
    * @param condition full condition object
    */
   public async addCondition(groupId: string, condition: ConditionType) {
      const groupIndex = this.getConditionGroupIndex(groupId);
      if (groupIndex != -1) {
         const updatedGroups = this.conditionGroups;
         updatedGroups.groups[groupIndex].conditions.push(condition);
         this.conditionGroups = updatedGroups;
         await this.update({ conditionGroups: updatedGroups });
      } else {
         throw new Error(`No group with id of ${groupId} found.`);
      }
   }

   /**
    * Gets index of a condition group using its group ID
    * @param id the ID of the condition to delete
    * @returns index of condition group, -1 if no matches were found
    */
   private getConditionGroupIndex(groupId: string): number {
      const index = this.conditionGroups.groups.findIndex(
         (group: ConditionGroupType) => {
            return group.id === groupId;
         }
      );
      return index;
   }

   /**
    * Finds condition index by group ID and condition ID
    * @param id the ID of the condition
    * @param groupId the ID of the group condition is in
    * @returns index of condition, -1 if doesn't exist
    */
   private getConditionIndex(groupId: string, id: string): number {
      const conditionGroupIndex = this.getConditionGroupIndex(groupId);
      let index = -1;
      if (conditionGroupIndex != -1) {
         index = this.conditionGroups.groups[
            conditionGroupIndex
         ].conditions.findIndex((condition: ConditionType) => {
            return condition.id === id;
         });
      }
      return index;
   }
}

export default Rule;
