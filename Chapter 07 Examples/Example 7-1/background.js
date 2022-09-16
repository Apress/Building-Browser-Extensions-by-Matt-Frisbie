console.log("Initialized background script!");

chrome.runtime.onInstalled.addListener((object) => {
  console.log("Installed background script!");
});
