const express = require("express");
const postController = require("../Controller/post");

module.exports = (app) => {
  app.get("/posts", postController.index);
  app.post("/post", postController.create);
  app.get("/post/:id", postController.read);
  app.patch("/post/:id", postController.patch);
  app.delete("/post/:id", postController.delete);
};
