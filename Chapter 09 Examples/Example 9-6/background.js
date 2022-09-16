chrome.action.onClicked.addListener((tab) => {
  const target = {
    tabId: tab.id,
  };

  chrome.scripting.executeScript({
    target,
    func: () => {
      document.body.innerHTML = `Hello, world!`;
    },
  });

  chrome.scripting.insertCSS({
    target,
    css: `body { background-color: red !important; }`,
  });
});
