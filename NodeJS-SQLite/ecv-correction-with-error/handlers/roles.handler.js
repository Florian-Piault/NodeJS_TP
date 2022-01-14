const { Role } = require("../models");
const createError = require("http-errors");

const createRole = async (req, res, next) => {
  const { name } = req.body;
  const role = await Role.create({
    name,
  });

  if (!role) return next(createError(500));
  return res.json(role);
};

const updateRole = async (req, res, next) => {
  const updateSuccess = await Role.update(
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
    const role = await Role.findByPk(req.params.id);
    return res.json(role);
  } else return next(createError(500));
};

const deleteRole = async (req, res, next) => {
  const deleteSuccess = await Role.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (deleteSuccess) {
    return res.status(204).json();
  } else return next(createError(500));
};

const getOneRole = async (req, res, next) => {
  const role = await Role.findByPk(req.params.id);

  if (!role) return next(createError(404));

  return res.json(Role);
};

const getManyRoles = async (req, res, next) => {
  const roles = await Role.findAll();

  if (!role) return next(createError(500));
  return res.json(roles);
};

module.exports = {
  createRole,
  updateRole,
  deleteRole,
  getOneRole,
  getManyRoles,
};
