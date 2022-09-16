const permissions = {
  permissions: ["storage"],
};

document.querySelector("#save").addEventListener("click", async () => {
  if (!(await chrome.permissions.contains(permissions))) {
    await chrome.permissions.request(permissions);
  }
  chrome.storage.sync.set({ foo: "bar" });
});
