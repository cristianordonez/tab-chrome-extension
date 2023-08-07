const getLastSession = async () => {
   const lastClosed = await chrome.sessions.getRecentlyClosed();
   return lastClosed;
};

export { getLastSession };
