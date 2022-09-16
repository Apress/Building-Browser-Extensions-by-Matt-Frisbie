const url = chrome.runtime.getURL("foo.js");

const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", url);
document.head.appendChild(script);
