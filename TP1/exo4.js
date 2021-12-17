const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.end(u);
});

server.listen(3000, () =>
  console.log("Le serveur tourne sur http://localhost:3000")
);
