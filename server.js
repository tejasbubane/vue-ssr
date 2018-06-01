const express = require("express");
const fs = require("fs");
const path = require("path");
const code = fs.readFileSync(
  path.join(__dirname, "./build/dist/build-server.js"),
  "utf8"
);
const renderer = require("vue-server-renderer").createBundleRenderer(code);
const index = fs.readFileSync(
  path.join(__dirname, "./build/dist/index.html"),
  "utf8"
);
const app = express();

app.use("/dist", express.static(path.join(__dirname, "./build/dist")));

app.get("*", (req, res) => {
  renderer.renderToString({ url: req.url }, (err, html) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(index.replace("<!--vue-ssr-outlet-->", html));
  });
});

console.log("Running on http://localhost:8081 ...");
app.listen(8081);
