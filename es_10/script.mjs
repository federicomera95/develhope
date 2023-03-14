import { writeFile } from "node:fs";

const data = "Hello world!!!";

writeFile("./path/file.txt", data, "utf8", (err) => {
  return err
    ? console.error(err)
    : console.log(`Success write on file.txt:  ${data}`);
});
