const http = require("http");

const server = http.createServer((req, res) => {
  const json = {
    firstname: "john",
    lastname: "doe",
    birthdate: "01/01/2000",
    color: "red",
  };
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(json));
});

server.listen(3000, () =>
  console.log("Le serveur tourne sur http://localhost:3000")
);
