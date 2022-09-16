chrome.action.onClicked.addListener(() => {
  const clientId = "YOUR_CLIENT_ID";
  const extensionRedirectUri = chrome.identity.getRedirectURL();

  const authUrl = new URL("https://github.com/login/oauth/authorize");

  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", extensionRedirectUri);

  chrome.identity.launchWebAuthFlow(
    {
      url: authUrl.href,
      interactive: true,
    },
    async (redirectUrl) => {
      if (redirectUrl) {
        const queryString = new URL(redirectUrl).search;
        const params = new URLSearchParams(queryString);
        const code = params.get("code");

        const authUrl = new URL("https://github.com/login/oauth/access_token");
        authUrl.searchParams.append("client_id", clientId);
        authUrl.searchParams.append("redirect_uri", extensionRedirectUri);
        authUrl.searchParams.append(
          "client_secret",
          "YOUR_CLIENT_SECRET"
        );
        authUrl.searchParams.append("code", code);

        const response = await fetch(authUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        });

        const accessTokenData = await response.json();

        const r = await fetch("https://api.github.com/user", {
          headers: {
            Authorization: "Bearer " + accessTokenData.access_token,
          },
        });

        console.log(await r.json());
      }
    }
  );
});

// Console output:
// {
//     "login": "msfrisbie",
//     "id": ...,
//     "node_id": "...",
//     "avatar_url": "...",
//     "gravatar_id": "",
//     "name": " Matt Frisbie",
//     "company": null,
//     "blog": "https://www.mattfriz.com",
//     "location": "Chicago, IL",
//     "bio": "Software engineer, bestselling author",
//     "twitter_username": "mattfriz",
//     "url": "https://api.github.com/users/msfrisbie",
//     ...
//   }
