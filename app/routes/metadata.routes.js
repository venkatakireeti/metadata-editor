module.exports = app => {
  const metadatas = require("../controllers/metadata.controller.js");
  const auth = require("../controllers/auth.controller.js");

  var router = require("express").Router();

  // Retrieve all metadatas
  router.get("/", metadatas.findAll);

  // delete metadatas
  router.delete("/:id", metadatas.deleteById);

  // create metadatas
  router.post("/", metadatas.create);

  // update metadatas
  router.put("/:id", metadatas.updateById);
  router.get("/login/url", auth.loginURL);
  router.get("/login/code", auth.getAccessToken);
  router.get("/user", auth.getUserInfo);
  app.use("/api/metadatas", router);
};
