module.exports = app => {
  const metadatas = require("../controllers/metadata.controller.js");

  var router = require("express").Router();

  // Retrieve all metadatas
  router.get("/", metadatas.findAll);

  // delete metadatas
  router.delete("/:id", metadatas.deleteById);

  // create metadatas
  router.post("/", metadatas.create);

  // update metadatas
  router.put("/:id", metadatas.updateById);
  router.get("/login/url", metadatas.loginURL);
  router.get("/login/code", metadatas.getGoogleAccountFromCode);
  app.use("/api/metadatas", router);
};
