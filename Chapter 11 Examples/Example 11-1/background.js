let count = 0;

function handler() {
  console.log("Handler executed!");

  if (++count > 4) {
    chrome.action.onClicked.removeListener(handler);
  }
}

// false
console.log(chrome.action.onClicked.hasListener(handler));

chrome.action.onClicked.addListener(handler);

// true
console.log(chrome.action.onClicked.hasListener(handler));
