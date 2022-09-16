console.log("content-script.js");

import(chrome.runtime.getURL("fetch-page.js"));

const el = document.createElement("script");
el.src = chrome.runtime.getURL("fetch-page.js");
document.body.appendChild(el);
