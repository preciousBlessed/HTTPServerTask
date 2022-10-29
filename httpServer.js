const http = require("http");
const url = require("url");
const fs = require("fs");

// Creating the HTTP SERVER
http
  .createServer((req, res) => {
    // Creating my Routes

    if (req.url === "/" || req.url === "/home") {
      fs.readFile("home.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text.html" });
          res.end("404 \n Page Not Found");
        }
        res.writeHead(200, { "Content-Type": "text.html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile("about.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text.html" });
          res.end("404 \n Page Not Found");
        }
        res.writeHead(200, { "Content-Type": "text.html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact") {
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text.html" });
          res.end("404 \n Page Not Found");
        }
        res.writeHead(200, { "Content-Type": "text.html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080, "localhost", () => {
    console.log("Server listening on port 8080... \nStarting Server...");
  });
