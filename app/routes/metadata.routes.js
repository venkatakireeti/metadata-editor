module.exports = app => {
  const tutorials = require("../controllers/metadata.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  app.use("/api/metadatas", router);
};
