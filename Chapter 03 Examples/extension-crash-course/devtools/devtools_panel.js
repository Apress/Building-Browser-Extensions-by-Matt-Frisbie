console.log("Hello from the devtools panel!");

chrome.devtools.network.onRequestFinished.addListener((request) => {
  document.body.innerHTML += `<div>${request.request.url}</div>`;
});
