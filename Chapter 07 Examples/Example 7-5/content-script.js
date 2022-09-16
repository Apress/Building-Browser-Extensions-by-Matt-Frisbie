function initializeCountdown(currentTabId) {
  // This will fire the runtime.onConnect event in the background
  const port = chrome.runtime.connect({
    name: `Tab ${currentTabId}`,
  });

  // Messages sent from the service worker
  port.onMessage.addListener((msg) => {
    console.log(port.name, msg);

    // Keep passing the value to the background while > 0
    if (msg.value > 0) {
      port.postMessage({ value: msg.value });
    }
  });

  // Start a countdown sequence every 1000ms
  setInterval(() => {
    const value = Math.floor(Math.random() * 10) + 1;

    console.log(`New countdown sequence: ${value}`);

    // Send the inital postMessage in the sequence
    port.postMessage({ value });
  }, 1000);
}

// Send a call/response message to the background
// to determine current tab's ID
chrome.runtime.sendMessage(
  // Providing a type allows the background to filter
  // incoming messages
  { type: "getCurrentTabId" },
  // Background can reply to this message with the tab ID
  (response) => initializeCountdown(response.currentTabId)
);
