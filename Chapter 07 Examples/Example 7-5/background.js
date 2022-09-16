// Messages include information about the sender
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // This handler will fire for all runtime.sendMessage payloads.
  // Use a value in the payload to filter.
  if (request.type === "getCurrentTabId") {
    // Send the tab's ID back to the content script
    sendResponse({ currentTabId: sender.tab.id });
  }
});

// This will fire when the content script calls runtime.connect()
chrome.runtime.onConnect.addListener((port) => {
  console.log(`Connected to ${port.name}`);

  // Messages sent from the content script
  port.onMessage.addListener((msg) => {
    console.log(port.name, msg);

    // Subtract 1 and send value back up to content script
    port.postMessage({ value: msg.value - 1 });
  });
});
