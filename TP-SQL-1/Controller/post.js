const { Post } = require("../models");

exports.index = async (req, res) => {
  const posts = Post.findAll();
  posts
    .then((data) => send(data))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.create = async (req, res) => {
  const post = Post.create(req.body);
  post
    .then((data) => res.send({ message: "Post created", data }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.read = async (req, res) => {
  const post = Post.findOne({ id: req.params.id });
  post
    .then((data) => send(data))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.patch = async (req, res) => {
  const post = post.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  post
    .then((data) => send({ message: "Post updated", data }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};

exports.delete = async (req, res) => {
  const post = Post.destroy({ id: req.params.id });
  post
    .then(() => send({ message: "Post deleted" }))
    .catch((error) => res.status(400).send({ message: "Bad request", error }));
};
