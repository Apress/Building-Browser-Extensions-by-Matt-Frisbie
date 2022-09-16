const outerVar = "foobar";

function wipeOutPage(bg) {
  // Record the typeof inside the content script
  const cs = typeof outerVar;
  document.body.innerHTML = `${bg} -> ${cs}`;
}

const css = `
body { 
    background-color: red !important; 
}`;

chrome.action.onClicked.addListener((tab) => {
  const target = {
    tabId: tab.id,
  };

  // Record the typeof inside the background
  const backgroundTypeof = typeof outerVar;

  chrome.scripting.executeScript({
    target,
    func: wipeOutPage,
    // This array of values will be curried
    // into `func` (similar to Array.apply)
    args: [backgroundTypeof],
  });

  chrome.scripting.insertCSS({
    target,
    css,
  });
});
