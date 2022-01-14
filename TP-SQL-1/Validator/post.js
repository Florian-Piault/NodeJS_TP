const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().required().min(4).max(30),
  author: Joi.number().required(),
  date: Joi.string().isoDate().required(),
  content: Joi.string().required().min(4).max(255),
});

const postSchemaArray = Joi.array().items(postSchema);

const postHasCommentSchema = Joi.object({
  id: Joi.number().integer().required(),
});

module.exports = { postSchema, postSchemaArray, postHasCommentSchema };
