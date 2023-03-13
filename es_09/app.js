const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    const responseBody = "<html><h1>Test expect</h1></html>";

    response.end(responseBody);
  });
}

module.exports = createApp;
