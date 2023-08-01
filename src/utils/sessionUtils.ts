const getLastSession = async () => {
   const lastClosed = await chrome.sessions.getRecentlyClosed();

   console.log('lastClosed: ', lastClosed);
};

export { getLastSession };
