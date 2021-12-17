const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("Hello World");
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Not Found");
  }
});

server.listen(3000, () =>
  console.log("Le serveur tourne sur http://localhost:3000")
);
