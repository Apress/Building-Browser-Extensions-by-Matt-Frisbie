chrome.action.onClicked.addListener((tab) => {
  const target = {
    tabId: tab.id,
  };

  chrome.scripting.executeScript({
    target,
    files: ["content-script.js"],
  });

  chrome.scripting.insertCSS({
    target,
    files: ["content-script.css"],
  });
});
