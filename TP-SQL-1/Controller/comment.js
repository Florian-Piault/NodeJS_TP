const { Comment } = require("../models");

exports.index = async (req, res) => {
  const comments = Comment.findAll();
  comments
    .then((data) => res.send(data))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.create = async (req, res) => {
  const comment = Comment.create(req.body);
  comment
    .then((data) => res.send({ message: "comment created", data }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.read = async (req, res) => {
  const comment = Comment.findOne({ id: req.params.id });
  comment
    .then((data) => res.send(data))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.patch = async (req, res) => {
  const comment = Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  comment
    .then((data) => send({ message: "comment updated", data }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.delete = async (req, res) => {
  const comment = Comment.destroy({ id: req.params.id });
  comment
    .then((data) => send({ message: "comment deleted" }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};
