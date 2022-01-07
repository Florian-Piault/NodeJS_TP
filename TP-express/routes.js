const express = require("express");
const Router = express.Router();
const userController = require("./handlers/users");

module.exports = (app) => {
  // exo1
  app.get("/hello-world", (req, res) => {
    res.send({ message: "Hello World!" });
  });

  // exo2
  app.get("/message", (req, res) => {
    const msg = req.query.message;
    if (msg.length >= 20)
      return res.status(400).send({
        message: "Bad Request",
      });
    else res.send({ message: msg });
  });

  // exo3
  app.post("/info-headers", (req, res) => {
    res.send(req.headers);
  });

  // exo4
  app.post("/exo4", (req, res) => {
    const payload = req.body;
    const ACTUAL_YEAR = "2022";
    const isMajor = ACTUAL_YEAR - payload.birthdate.split("/")[2] >= 18;

    if (isMajor)
      res.status(200).send({ message: "Welcome:" + payload.firstname });
    else res.status(403).send({ message: "Forbidden" });
  });

  // exo5
  app.get("/rick-roll", (req, res) => {
    res.redirect("https://youtu.be/dQw4w9WgXcQ");
  });

  // exo6
  app.delete("/custom-header", (req, res) => {
    res.set(Message, "hello world").send(req.headers);
  });

  //exo8
  app.get("/params/:id/:key/:slug", (req, res) => {
    res.send(req.params);
  });

  // exo9
  app.get("/users", userController.getUsers);
  app.get("/users/:id", userController.getUser);
  app.post("/users", userController.createUser);
  app.delete("/users/:id", userController.deleteUser);
};
