const userController = require("../Controller/user");
const {
  userSchema,
  userSchemaArray,
  userHasPostSchema,
} = require("../Validator/user");
const validator = require("express-joi-validation").createValidator({});

module.exports = (app) => {
  app.get("/", async (req, res) => {
    res.send("hello");
  });

  app.get("/users", validator.body(userSchemaArray), userController.index);
  app.post("/user", validator.body(userSchema), userController.create);
  app.get(
    "/user/:id",
    validator.response(userSchema),
    validator.params(userHasPostSchema),
    userController.read
  );
  app.patch("/user/:id", validator.body(userSchema), userController.patch);
  app.delete("/user/:id", userController.delete);
};
