console.log("Hello form NodeJS!!"); 
const fs = require("fs");

fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});