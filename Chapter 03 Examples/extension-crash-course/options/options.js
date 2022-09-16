console.log("Hello from options!");

document.querySelector("#btn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ text: "Options" });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0]?.id, { text: "Options" });
  });
});

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.text}</div>`;
});
