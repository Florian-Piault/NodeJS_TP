const validator = require("express-joi-validation").createValidator({});
const { commentSchema, commentSchemaArray } = require("../comment");
const commentController = require("../Controller/comment");

module.exports = (app) => {
  app.get(
    "/comments",
    validator.body(commentSchemaArray),
    commentController.index
  );
  app.post("/comment", validator.body(commentSchema), commentController.create);
  app.get(
    "/comment/:id",
    validator.response(commentSchema),
    commentController.read
  );
  app.patch(
    "/comment/:id",
    validator.body(commentSchema),
    commentController.patch
  );
  app.delete("/comment/:id", commentController.delete);
};
