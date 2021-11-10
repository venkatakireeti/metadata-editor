const db = require("../models");
const MetaData = db.metadatas;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  var condition = {};
console.log(MetaData);

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

