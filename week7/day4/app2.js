import { read, write } from "./fileManager.js";

read("path/to/Hello World.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});

write("path/to/Bye World.txt", "Hello, World!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});
