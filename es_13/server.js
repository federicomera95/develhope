require("dotenv").config();

const app = require("/app");

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server listen at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  );
});
