const { User, Post } = require("../models");
const createError = require("http-errors");

const createUser = async (req, res, next) => {
  const { firstname, lastname, email, github_url } = req.body;
  const user = await User.create({
    firstname,
    lastname,
    email,
    github_url,
  });

  if (!user) return next(createError(404));
  return res.json(user);
};

const updateUser = async (req, res, next) => {
  const updateSuccess = await User.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  if (updateSuccess) {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
  } else return next(createError(500));
};

const deleteUser = async (req, res, next) => {
  const deleteSuccess = await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (deleteSuccess) {
    return res.status(204).json();
  } else return next(createError(500));
};

const getOneUser = async (req, res, next) => {
  let user = null;

  if (req.query.displayPosts) {
    user = await User.findByPk(req.params.id, {
      include: {
        model: Post,
      },
    });
  } else {
    user = await User.findByPk(req.params.id);
  }

  if (!user) return next(createError(404));

  return res.json(user);
};

const getManyUsers = async (req, res) => {
  const users = await User.findAll();

  if (!users) return next(createError(500));
  return res.json(users);
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getManyUsers,
};
