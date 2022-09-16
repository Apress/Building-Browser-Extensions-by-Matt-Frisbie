console.log("Initialized background script!");

chrome.runtime.onInstalled.addListener((object) => {
  console.log("Installed background script!");
});

chrome.action.onClicked.addListener(() => {
  console.log("Clicked toolbar icon!");
});

let elapsed = 0;
setInterval(() => console.log(`${++elapsed}s`), 1000);
