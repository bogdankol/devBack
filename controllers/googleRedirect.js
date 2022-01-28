const queryString = require("query-string");
const axios = require("axios");
const {UserModel} = require('../db/userModel')
const {googleRegistration, googleLogin} = require('../model')

const googleRedirect = async (req, res) => {
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    const urlObj = new URL(fullUrl);
    const urlParams = queryString.parse(urlObj.search);
    const code = urlParams.code;
    const tokenData = await axios({
        url: `https://oauth2.googleapis.com/token`,
        method: "post",
        data: {
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: `${process.env.BASE_URL}/api/users/google-redirect`,
            grant_type: "authorization_code",
            code,
        },
    });
    const userData = await axios({
        url: "https://www.googleapis.com/oauth2/v2/userinfo",
        method: "get",
        headers: {
            Authorization: `Bearer ${tokenData.data.access_token}`,
        },
    });
    // userData.data.email
    // ...
    // ...
    // ...
    // return res.redirect(
    //   `${process.env.FRONTEND_URL}?email=${userData.data.email}`
    // );
    // console.log(userData.data.picture)
    const user = await UserModel.findOne({email: userData.data.email})
    if(!user) {
        try {
            const newUser = await googleRegistration(userData.data.email, userData.data.name, userData.data.picture)
            const data = await UserModel.findOne({token: newUser.token})
            res.redirect(`${process.env.FRONTEND_URL}token=${data.token}`)
        } catch (err) {
            throw new Error(err.message)
        }
    }
    const token = await googleLogin(user)
    return res.redirect(
        `${process.env.FRONTEND_URL}token=${token}`
    );
    
};

module.exports = {
    googleRedirect
  }