chrome.runtime.onMessage.addListener((msg) => {
  chrome.tabs.create({
    url: msg.url,
  });
});
