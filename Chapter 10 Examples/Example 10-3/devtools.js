chrome.devtools.panels.sources.createSidebarPane(
  "Demo Sources Sidebar",
  (sidebar) => {
    sidebar.setPage("sources_sidebar.html");
  }
);

chrome.devtools.panels.elements.createSidebarPane(
  "Demo Elements Sidebar",
  (sidebar) => {
    sidebar.setPage("elements_sidebar.html");
  }
);
