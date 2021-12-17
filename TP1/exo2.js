const http = require("http");

const server = http.createServer((req, res) => {
  const json = {
    message: "Hello world!",
    status: 200,
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(json));
});

server.listen(3000, () =>
  console.log("Le serveur tourne sur http://localhost:3000")
);
