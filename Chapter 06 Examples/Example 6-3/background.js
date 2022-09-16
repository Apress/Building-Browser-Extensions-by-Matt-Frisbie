chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get(["count"], ({ count = 0 }) => {
    console.log(`Clicked ${++count} times`);

    chrome.storage.local.set({ count });
  });
});
