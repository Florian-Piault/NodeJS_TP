exports.getUsers = (req, res) => {
  res.send("ALL users");
};
exports.getUser = (req, res) => {
  res.send(`User id: ${req.params.id}`);
};
exports.createUser = (req, res) => {
  res.send("Create user");
};
exports.deleteUser = (req, res) => {
  res.send(`Delete user id : ${req.params.id}`);
};
