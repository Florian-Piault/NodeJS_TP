const validator = require("express-joi-validation").createValidator({});
const {
  commentSchema,
  commentSchemaArray,
  postHasCommentSchema,
} = require("../Validator/comment");
const postController = require("../Controller/post");
const Joi = require("joi");

module.exports = (app) => {
  app.get("/posts", validator.body(commentSchemaArray), postController.index);
  app.post("/post", validator.body(commentSchema), postController.create);
  app.get(
    "/post/:id",
    validator.response(commentSchema),
    validator.params(postHasCommentSchema),
    postController.read
  );
  app.patch("/post/:id", validator.body(commentSchema), postController.patch);
  app.delete("/post/:id", postController.delete);
};
