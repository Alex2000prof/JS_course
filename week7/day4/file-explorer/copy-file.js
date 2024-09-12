import { readFile, writeFile } from "fs";

readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    console.error("error", err);
    return;
  }

  writeFile("destination.txt", data, "utf8", (err) => {
    if (err) {
      console.error("error", err);
      return;
    }

    console.log("sucess in destination.txt");
  });
});
