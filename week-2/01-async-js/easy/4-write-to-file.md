## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const data = "appending this to file";

function vaibhavWrites() {
  let a = new Promise(function (resolve) {
    fs.writeFile("textFile.txt", data, function (err) {
      if (err) throw err;
      resolve();
    });
  });
  return a;
}

function vaibhavReads() {
  let a = new Promise(function (resolve) {
    fs.readFile("textFile.txt", "utf-8", function (err, response) {
      resolve(response);
    });
  });
  return a;
}

async function main() {
  let a = await vaibhavWrites();
  console.log(a);
  let b = await vaibhavReads();
  console.log(b);
}

main();

