const filter = {
  url: [
    {
      urlMatches: "https://www.example.com/",
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  console.log("Visited the special site!");
}, filter);

chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
  console.log(`Loaded ${details.url}!`);
});
