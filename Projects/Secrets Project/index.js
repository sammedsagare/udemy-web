import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import exp from "constants";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 1607;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/check", (req, res) => {
  console.log(req.body);
  if (req.body.password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    req.body.password = "";
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});
