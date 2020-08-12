const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text-plain");
  next();
});

app.get("/dishes", (req, res, next) => {
  res.end("will send all dishes to you");
});

app.post("/dishes", (req, res, next) => {
  res.end(
    "will add the dish: " +
      req.body.name +
      "with details: " +
      req.body.description
  );
});

app.put("/dishes", (req, res, next) => {
  res.statusCode = 403;
  res.end("put operation not supported in dish");
});

app.delete("/dishes", (req, res, next) => {
  res.end("will delete all dishes to you");
});

app.get("/dishes/:dishId", (req, res, next) => {
  res.end("will send ditails of dish: " + req.params.dishId);
});

app.post("/dishes/:dishId", (req, res, next) => {
  res.statusCode = 403;
  res.end("post operation not supported in dishes/" + req.params.dishId);
});

app.put("/dishes/:dishId", (req, res, next) => {
  res.write("updating dish: " + req.params.dishId + "\n");
  res.end(
    "will update dish: " +
      req.body.name +
      " with details " +
      req.body.description
  );
});

app.delete("/dishes/:dishId", (req, res, next) => {
  res.end("will delete dishe :" + req.params.dishId);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express server</h1></body></html>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
