chrome.action.onClicked.addListener(() => {
  const clientId = "YOUR_CLIENT_ID";
  const extensionRedirectUri = chrome.identity.getRedirectURL();
  const nonce = Math.random().toString(36).substring(2, 15);

  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  // Define fields for OpenID
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("response_type", "id_token");
  authUrl.searchParams.set("redirect_uri", extensionRedirectUri);
  authUrl.searchParams.set("scope", "openid profile email");
  authUrl.searchParams.set("nonce", nonce);
  authUrl.searchParams.set("prompt", "consent");

  chrome.identity.launchWebAuthFlow(
    {
      url: authUrl.href,
      interactive: true,
    },
    (redirectUrl) => {
      if (redirectUrl) {
        // The ID token is in the URL hash
        const urlHash = redirectUrl.split("#")[1];
        const params = new URLSearchParams(urlHash);
        const jwt = params.get("id_token");

        // Parse the JSON Web Token
        const base64Url = jwt.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        const token = JSON.parse(atob(base64));

        console.log(token);
      }
    }
  );
});

// Console output:
// {
//     "iss": "https://accounts.google.com",
//     "azp": "...",
//     "aud": "...",
//     "sub": "...",
//     "email": "XXXXX@gmail.com",
//     "email_verified": true,
//     "nonce": "...",
//     "name": "Matt Frisbie",
//     "picture": "...",
//     "given_name": "Matt",
//     "family_name": "Frisbie",
//     "locale": "en",
//     "iat": ...,
//     "exp": ...,
//     "jti": "..."
// }
