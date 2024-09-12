import { readFile, writeFile } from "fs";

export function read(path, call) {
  readFile(path, "utf-8", call);
}

export function write(path, content, call) {
  writeFile(path, content, "utf8", call);
}
