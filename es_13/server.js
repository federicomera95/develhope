const express = require("express");

const createServer = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ extended: true }));

  app.get("/", (req, res) => {
    console.log("Get response");

    return res.status(200).json({ status: "online" });
  });

  return app;
};

module.exports = createServer;
