const express = require("express");
const commentController = require("../Controller/comment");

module.exports = (app) => {
  app.get("/comments", commentController.index);
  app.post("/comment", commentController.create);
  app.get("/comment/:id", commentController.read);
  app.patch("/comment/:id", commentController.patch);
  app.delete("/comment/:id", commentController.delete);
};
