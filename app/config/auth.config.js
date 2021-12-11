const queryString = require('query-string');

const defaultScope = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
];


//to do get from proces env  
const stringifiedParams = queryString.stringify({
    client_id: '332859650716-5o209mlbuekra8ek4s9saf8me3boasub.apps.googleusercontent.com',
    redirect_uri: 'http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:49160',
    scope: defaultScope.join(' '), // space seperated string
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
});

module.exports = {
    clientId: '332859650716-5o209mlbuekra8ek4s9saf8me3boasub.apps.googleusercontent.com',
    secret: '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',
    redirectUri: 'http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:49160',
    authParams: stringifiedParams,
    scopes: defaultScope,
};