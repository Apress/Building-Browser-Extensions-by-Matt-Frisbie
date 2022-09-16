const id = "1";

chrome.action.onClicked.addListener(async () => {
  const activeScripts = await chrome.scripting.getRegisteredContentScripts();

  // Toggle the content script
  if (activeScripts.find((x) => x.id === id)) {
    chrome.scripting.unregisterContentScripts({
      ids: [id],
    });
    console.log("Unregistered content script");
  } else {
    chrome.scripting.registerContentScripts([
      {
        id,
        matches: ["<all_urls>"],
        js: ["content-script.js"],
        css: ["content-script.css"],
      },
    ]);
    console.log("Registered content script");
  }
});
