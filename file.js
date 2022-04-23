const fs = require("fs");

// write file

// const quote = "arun is good boy";
// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("completed writing");
// });

// task1
// const quote2 = "Live more worry less";
// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("completed writing");
//   });
// }

// task2
// const [, , n] = process.argv;
// const quote3 = "Happy new year";

// for (let i = 1; i <= n; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("completed writing");
//   });
// }

// Read File

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });

//append file
// const niceQuote = "\nThis is nice Quote";
// fs.appendFile(`./niceQuote.txt`, niceQuote, (err) => {
//   console.log("completed writing niceQuote");
// });

for (let i = 1; i <= 10; i++) {
  fs.unlink(`./backup/text-${i}.html`, (err) => {
    console.log("Deleted successfully");
  });
}
