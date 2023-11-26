/**
 * Used for checkbox options for selecting tabs, extends chrome.tabs.Tab
 */
class FormattedTab {
   isChecked = false;
   title = '';
   id = -1;

   constructor(tab: chrome.tabs.Tab) {
      Object.assign(this, tab);
      this.isChecked = false;
   }
}

export default FormattedTab;
