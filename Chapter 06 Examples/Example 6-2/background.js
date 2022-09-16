let count = 0;

chrome.action.onClicked.addListener(() => {
  console.log(`Clicked ${++count} times`);
});
