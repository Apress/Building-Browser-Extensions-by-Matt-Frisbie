console.log("Hello from content script!");

document.body.innerHTML += `
<div id="container">
  <h1>This is the content script!</h1>
  <button id="btn">Send content script message</button>
</div>
`;

document.querySelector("#btn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ text: "Content script" });
});

chrome.runtime.onMessage.addListener((msg) => {
  document.querySelector("#container").innerHTML += `<div>${msg.text}</div>`;
});
