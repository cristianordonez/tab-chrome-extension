import {
   LocalStorageRules,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
   RuleType,
} from '../types';

class Storage {
   /**
    * Class for working with chrome.storage API
    */
   private key: string;
   constructor(key: string) {
      this.key = key;
   }

   /**
    * Sets storage to given data
    * @param data any object to set key to
    */
   public async set(data: object): Promise<void> {
      await chrome.storage.local.set({ [this.key]: data });
   }

   /**
    * get key value from chrome storage
    * if no value is given for itemKey, entire object will be returned
    * @returns value of key in storage, or value of specific item within this storage object
    */
   public async get(
      itemKey?: string | undefined
   ): Promise<LocalStorageTabGroups | LocalStorageTitles | LocalStorageRules> {
      const storage = await chrome.storage.local.get([this.key]);
      if (`${this.key}` in storage) {
         const result = storage[`${this.key}`];
         if (itemKey !== undefined) {
            if (`${itemKey}` in result) {
               return result[`${itemKey}`];
            } else {
               throw new Error(`${itemKey} does not exist in ${result}`);
            }
         }
         return result;
      } else {
         const defaultStorage = {};
         await chrome.storage.local.set({ [`${this.key}`]: defaultStorage });
         return defaultStorage;
      }
   }

   /**
    * Add or Update a key value pair to current storage object
    * @param itemKey key value being added
    * @param itemValue value to assign key to. Should be JSON formatted string
    * @returns updated storage object
    */
   public async add(
      itemKey: number | string,
      itemValue: number[] | LocalStorageTabGroup | RuleType
   ): Promise<LocalStorageTabGroups | LocalStorageTitles | LocalStorageRules> {
      const storageData = await this.get();
      storageData[itemKey] = itemValue;
      await this.set(storageData);
      return storageData;
   }
}

export default Storage;
