import express from "express";

const app = express();
const port = 1607;

function logger(req, res, next) {
  console.log("Request Method: " + req.method);
  console.log("Request URL: " + req.url);
  console.log("Request Status: " + res.statusCode);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});
