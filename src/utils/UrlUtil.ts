/**
 * TODO utility class for working with urls
 */
class UrlUtil {
   private url: string;
   private util: URL;

   constructor(url: string) {
      this.url = url;
      this.util = new URL(url);
   }

   public hostname(): string {
      return this.util.hostname;
   }

   public pathname(): string {
      return this.util.pathname;
   }

   public query(): string {
      const splitUrl = this.url.split('?');
      return splitUrl[splitUrl.length - 1];
   }

   public getUrl(): string {
      return this.url;
   }

   /**
    * Constructs favicon url from tab url
    * @returns url to use for favicon for given tab
    */
   public getFaviconURL = (): string => {
      const url = new URL(chrome.runtime.getURL('/_favicon/'));
      url.searchParams.set('pageUrl', this.url);
      url.searchParams.set('size', '32');
      return url.toString();
   };
}

export default UrlUtil;
