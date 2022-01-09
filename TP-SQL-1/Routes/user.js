const express = require("express");
const userController = require("../Controller/user");

module.exports = (app) => {
  app.get("/", async (req, res) => {
    res.send("hello");
  });

  app.get("/users", userController.index);
  app.post("/user", userController.create);
  app.get("/user/:id", userController.read);
  app.patch("/user/:id", userController.patch);
  app.delete("/user/:id", userController.delete);
};
