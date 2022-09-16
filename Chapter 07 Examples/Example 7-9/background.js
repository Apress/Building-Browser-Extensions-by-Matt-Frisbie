let lifeline;

// Disconnect and reconnect
function keepAliveForced() {
  lifeline?.disconnect();
  lifeline = null;
  keepAlive();
}

async function keepAlive() {
  if (lifeline) {
    return;
  }

  // Locate any eligible tab and connect to it
  for (const tab of await chrome.tabs.query({})) {
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => chrome.runtime.connect({ name: "KEEPALIVE" }),
      });

      return;
    } catch (e) {}
  }
}

chrome.runtime.onConnect.addListener((port) => {
  if (port.name == "KEEPALIVE") {
    lifeline = port;

    // Refresh the connection after 1 minute
    setTimeout(keepAliveForced, 6e4);
    port.onDisconnect.addListener(keepAliveForced);
  }
});

// Any tab change means reconnecting may be required
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info.url && /^(file|https?):/.test(info.url)) {
    keepAlive();
  }
});

keepAlive();

let age = 0;
setInterval(() => console.log(`Age: ${++age}s`), 1000);
