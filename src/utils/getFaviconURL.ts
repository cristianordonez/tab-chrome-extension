import UrlUtil from './UrlUtil';

export const getFaviconURL = (url: string) => {
   const util = new UrlUtil(url);
   return util.getFaviconURL();
};
