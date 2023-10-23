class Rules {
   private rules;

   constructor() {
      this.rules = this.getRules();
   }

   /**
    * Gets rules from local storage
    */
   public async getRules() {}

   /**
    * Saves rules to local storage
    */
   public async saveRule() {}

   /**
    * Updates given rule
    */
   public async updateRule() {}

   /**
    * Deletes given rule from local storage
    */
   public async deleteRule() {}
}

export default Rules;
