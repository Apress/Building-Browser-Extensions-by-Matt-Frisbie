const url = chrome.runtime.getURL("foo.js");

import(url).then((fooModule) => {
  fooModule.bar();
});
