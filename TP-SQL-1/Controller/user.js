const { User } = require("../models");

exports.index = async (req, res) => {
  const users = User.findAll();
  users
    .then((data) => res.bodysend(data))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.create = async (req, res) => {
  const user = User.create(req.body);
  user
    .then((data) => res.send({ message: "User created", data }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.read = async (req, res) => {
  const displayPosts = req.query.posts ?? false;
  const user = User.findOne({ id: req.params.id });
  user
    .then((data) => {
      if (displayPosts) res.send({ message: "Posts are displayed", data });
      else res.send(data);
    })
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.patch = async (req, res) => {
  const user = User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  user
    .then((data) => res.send({ message: "User updated", data }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.delete = async (req, res) => {
  const user = User.destroy({ id: req.params.id });
  user
    .then((data) => res.send({ message: "User deleted" }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};
