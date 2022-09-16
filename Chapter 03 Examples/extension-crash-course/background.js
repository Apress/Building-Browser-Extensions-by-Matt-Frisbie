console.log("Hello from the background script!");

chrome.runtime.onMessage.addListener((msg) => {
  console.log(msg.text);
});
