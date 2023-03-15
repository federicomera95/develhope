const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  console.log("Get response");

  return res.status(200).json({ status: "online" });
});

module.exports = app;
