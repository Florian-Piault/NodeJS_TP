const express = require("express");
const app = express();
const PORT = 3000;
const { User } = require("./sequelize");

app.get("/", async (req, res) => {
  const jane = await User.create({});
  res.json(jane);
});

app.listen(PORT, () => console.log("http://localhost:" + PORT));
