const Joi = require("joi");

const roleSchema = Joi.object({
  name: Joi.string().required(),
});

const roleSchemaArray = Joi.array().items(roleSchema);

module.exports = { roleSchema, roleSchemaArray };
