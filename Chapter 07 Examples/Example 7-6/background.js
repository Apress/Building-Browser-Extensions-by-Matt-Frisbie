function wipeOutPage() {
  document.body.innerHTML = "";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: wipeOutPage,
  });
});
