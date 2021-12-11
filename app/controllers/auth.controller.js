const axios = require("axios");
const authConfig = require("../config/auth.config.js");
async function getAccessTokenFromCode(code) {
    const { data } = await axios({
        url: `https://oauth2.googleapis.com/token`,
        method: 'post',
        data: {
            client_id: authConfig.clientId,
            client_secret: authConfig.secret,
            redirect_uri: authConfig.redirectUri,
            grant_type: 'authorization_code',
            code,
        },
    });
    console.log(data); // { access_token, expires_in, token_type, refresh_token }
    return data.access_token;
};

async function getGoogleUserInfo(access_token) {
    const { data } = await axios({
      url: 'https://www.googleapis.com/oauth2/v2/userinfo',
      method: 'get',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log(data); // { id, email, given_name, family_name }
    return data;
  };

exports.loginURL = (req, res) => {
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${authConfig.authParams}`;
    res.send(googleLoginUrl);
};

exports.getAccessToken = async (req, res) => {
    const { code } = req.query;
    console.log(code);
    const accessToken = await getAccessTokenFromCode(code);
    const userInfo = await getGoogleUserInfo(accessToken);
    res.send({user: userInfo, accessToken: accessToken });
};