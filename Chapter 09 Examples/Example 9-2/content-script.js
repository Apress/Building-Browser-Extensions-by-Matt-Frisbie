for (const el of document.querySelectorAll("style")) {
  el.parentElement.removeChild(el);
}

for (const el of document.querySelectorAll('link[rel="stylesheet"]')) {
  el.parentElement.removeChild(el);
}

for (const el of document.querySelectorAll("[style]")) {
  el.removeAttribute("style");
}
