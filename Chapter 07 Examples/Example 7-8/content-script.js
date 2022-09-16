const root = document.createElement("div");
root.innerHTML = `
<div style="position:fixed;top:0;left:0">
    <button id="direct-open">THIS WILL NOT WORK</button>
    <button id="indirect-open">THIS WILL WORK</button>
</div>
`;

document.body.appendChild(root);

const url = chrome.runtime.getURL("foobar.html");

document.querySelector("#direct-open").addEventListener("click", () => {
  window.open(url);
});

document.querySelector("#indirect-open").addEventListener("click", () => {
  chrome.runtime.sendMessage({ url });
});
