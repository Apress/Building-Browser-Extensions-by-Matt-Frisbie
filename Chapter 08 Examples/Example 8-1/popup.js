document.querySelector("#url").innerHTML = `
<pre>Page URL: ${window.location.href}</pre>
`;

document.querySelector("#xid").innerHTML = `
<pre>Extension ID: ${chrome.runtime.id}</pre>
`;
