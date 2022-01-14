const Joi = require("joi");

const commentSchema = Joi.object({
  post: Joi.string().required().min(4).max(30),
  content: Joi.string().required().min(4).max(30),
  date: Joi.string().isoDate().required(),
  author: Joi.number().required(),
});

const commentSchemaArray = Joi.array().items(commentSchema);

module.exports = { commentSchema, commentSchemaArray };
