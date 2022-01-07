const express = require("express");
const sequelize = require("sequelize");
const app = express();
const Router = require("./Routes/user.js")(app);
const PORT = 3000;

app.listen(PORT, () => console.log("http://localhost:" + PORT));
