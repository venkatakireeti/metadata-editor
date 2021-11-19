const db = require("../models");
const MetaData = db.metadatas;

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

