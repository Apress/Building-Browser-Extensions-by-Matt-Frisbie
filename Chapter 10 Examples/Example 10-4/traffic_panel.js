function logRequest(har) {
  document.body.innerHTML += `
  <div>
    ${har.request.method} ${har.request.url} (${har.response.status})
  </div>`;
}

// One-time call to acquire all the requests accumulated
// so far. This allows you to navigate between
// devtools panels without losing the traffic log.
chrome.devtools.network.getHAR((harLog) => {
  for (let har in harLog.entries) {
    logRequest(har);
  }
});

// Fires each time the top-level webpage changes URL
chrome.devtools.network.onNavigated.addListener((url) => {
  document.body.innerHTML += `<hr><h1>${url}</h1><hr>`;
});

// Fired each time anything in the webpage
// makes a network request
chrome.devtools.network.onRequestFinished.addListener((har) => {
  logRequest(har);
});
