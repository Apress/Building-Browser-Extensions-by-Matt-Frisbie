const RULE_ID = 1;

const RULE_1 = {
  id: RULE_ID,
  priority: 1,
  action: {
    type: "redirect",
    redirect: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1920px-Hot_dog_with_mustard.png",
    },
  },
  condition: {
    domains: ["wikipedia.org", "wikimedia.org"],
    resourceTypes: ["image"],
  },
};

chrome.action.onClicked.addListener(async () => {
  const dynamic_rules = await chrome.declarativeNetRequest.getDynamicRules();

  if (dynamic_rules.find((rule) => rule.id === 1)) {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: RULE_ID,
    });
  } else {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [RULE_1],
    });
  }

  console.log("Toggled rule");
});
