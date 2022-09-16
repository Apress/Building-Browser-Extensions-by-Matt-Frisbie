chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return {
      cancel: true,
    };
  },
  {
    urls: ["*://www.wikipedia.org/portal/wikipedia.org/assets/img/*"],
  },
  ["blocking"]
);
