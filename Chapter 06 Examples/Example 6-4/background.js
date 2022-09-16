chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { cancel: true };
  },
  { urls: ["*://*.google.com/logos/*"] },
  ["blocking"]
);
