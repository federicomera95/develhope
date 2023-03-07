var figlet = require("./node_modules/figlet");

figlet("This is a text base art", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
