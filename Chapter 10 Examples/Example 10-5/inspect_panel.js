document.querySelector("#check").addEventListener("click", () => {
  chrome.devtools.inspectedWindow.eval(
    `({
      'url': window.location.href,
      'usesJquery': !!window.jQuery
    })`,
    null,
    (result) => {
      const div = document.createElement("div");
      div.innerText = `${result.url} uses jQuery: ${result.usesJquery}`;
      document.body.appendChild(div);
    }
  );
});
