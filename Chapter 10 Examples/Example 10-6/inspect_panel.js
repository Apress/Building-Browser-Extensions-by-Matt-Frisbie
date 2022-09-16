document.querySelector("#inspect").addEventListener("click", () => {
  chrome.devtools.inspectedWindow.eval(
    `inspect(document.querySelector('img'))`
  );
});

document.querySelector("#tagname").addEventListener("click", () => {
  chrome.devtools.inspectedWindow.eval(`$0?.tagName`, null, (result) => {
    const div = document.createElement("div");
    div.innerText = result;
    document.body.appendChild(div);
  });
});
