const db = require("../models");
const MetaData = db.metadatas;


// const {google} = require('googleapis');

// const oauth2Client = new google.auth.OAuth2(
//   "332859650716-5o209mlbuekra8ek4s9saf8me3boasub.apps.googleusercontent.com",
//   "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",
//   "http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:49160",
// );



// function createConnection() {
//   return new google.auth.OAuth2(
//     "332859650716-5o209mlbuekra8ek4s9saf8me3boasub.apps.googleusercontent.com",
//     "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",
//     "http://ec2-18-217-55-36.us-east-2.compute.amazonaws.com:49160",
//     // "http://localhost:3000",
//   );
// }

// const people = google.people('v1');

// function getGooglePlusApi(auth) {
//   return google.people({ version: 'v1', auth });
// }

// Retrieve all metadata from the database.
exports.findAll = (req, res) => {
  var condition = {};

  MetaData.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Metadatas"
      });
    });
};
exports.create = (req, res) => {
  var metadata = new MetaData();
  metadata.ListName = req.body.listName;

  metadata
    .save(metadata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Metadatas",
      });
    });
};

exports.updateById = (req, res) =>  {
  const { id } = req.params;

  MetaData.findByIdAndUpdate(id,
    { ListName: req.body.listName }).then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Metadatas",
      });
    });
};

// delete metadata by id from the database.
exports.deleteById = (req, res) => {
  const { id } = req.params;

  MetaData.findByIdAndDelete(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Metadatas"
      });
    });
};

// /**
//  * Extract the email and id of the google account from the "code" parameter.
//  */
//  exports.getGoogleAccountFromCode = async (req, res) => {
//   const {code} = req.query;
//   console.log(code);
//   // get the auth "tokens" from the request
//   const data = await oauth2Client.getToken(code);
//   const tokens = data.tokens;

  
//   // add the tokens to the google api so we have access to the account
//   const auth = createConnection();
//   auth.setCredentials(tokens);
//   const people = getGooglePlusApi(auth);
//   const me = await people.people.get({
//     resourceName : 'people/me',
//     personFields: 'emailAddresses',
//   });
//   console.log(me);
  
//   // get the google id and email
//   const userGoogleId = me.data.id;
//   const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;

//   // return so we can login or sign up the user
//   res.status(200).send({
//     id: userGoogleId,
//     email: userGoogleEmail,
//     tokens: tokens, // you can save these to the user if you ever want to get their details without making them log in again
//   });
// }
