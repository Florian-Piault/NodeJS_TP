const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");

const userSchema = Joi.object({
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  github: Joi.string().required(),
});

const userSchemaArray = Joi.array().items(userSchema);

const userHasPostSchema = Joi.object({
  id: Joi.number().integer().required(),
});

module.exports = { userSchema, userSchemaArray, userHasPostSchema };
