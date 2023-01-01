const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", (req, res, next) => {
  res.send("Hi world");
});

// app.use("/hello", (req, res, next) => {
//   res.send("Hello world");
// });

const options = {
  key: fs.readFileSync("cert/server.key"),
  cert: fs.readFileSync("cert/server.crt"),
};

// https
//   .createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end("hello world\n");
//   })
//   .listen(3000, () => console.log("listening"));

const sslServer = https.createServer(options, app);
sslServer.listen(3000, () => console.log("Server started 🚀🚀🚀"));
