const db = require("../models");
const MetaData = db.metadatas;

const {google} = require('googleapis');


const oauth2Client = new google.auth.OAuth2(
  "332859650716-5o209mlbuekra8ek4s9saf8me3boasub.apps.googleusercontent.com",
  "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",
  "http://localhost:3000",
);

const scopes = [
  'https://www.googleapis.com/auth/blogger',
  'https://www.googleapis.com/auth/calendar'
];
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

exports.loginURL = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
  
    // If you only need one scope you can pass it as a string
    scope: scopes
  });
  res.send(url);
};
