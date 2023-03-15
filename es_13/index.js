require("dotenv").config();
const createServer = require("./server");

const app = createServer();

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server listen at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  );
});
