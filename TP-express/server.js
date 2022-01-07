const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// exo7
const Router = require("./routes.js")(app);

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
