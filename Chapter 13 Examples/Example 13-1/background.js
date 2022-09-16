chrome.action.onClicked.addListener(() => {
    chrome.identity.getAuthToken(
      {
        interactive: true,
      },
      (token) => {
        if (token) {
          chrome.identity.getProfileUserInfo(
            { accountStatus: "ANY" },
            (info) => console.log(info)
          );
        }
      }
    );
  });
  
  // Console output:
  // { "email": <google_email>, "id": <google_gaia_id> }
  