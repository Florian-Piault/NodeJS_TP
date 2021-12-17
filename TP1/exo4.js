const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/Html" });
  const currURL = url.parse(req.url, true).query;
  const msg = currURL.message;
  if (msg) res.write(`Your message: ${msg}`);
  else res.write("You did not provide a message parameter");
  res.end(); //   if (msg) res.end(`Your message: ${msg}`);
  //   else res.end("No message was provided");
});

server.listen(3000, () =>
  console.log("Le serveur tourne sur http://localhost:3000")
);
