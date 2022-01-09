const express = require("express");
const sequelize = require("sequelize");
const app = express();
const userRouter = require("./Routes/user.js")(app);
const postRouter = require("./Routes/post.js")(app);
const commentRouter = require("./Routes/comment.js")(app);
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => console.log("http://localhost:" + PORT));
