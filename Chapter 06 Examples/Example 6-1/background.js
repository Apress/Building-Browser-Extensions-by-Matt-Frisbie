let count = 0;

chrome.browserAction.onClicked.addListener(() => {
  console.log(`Clicked ${++count} times`);
});
