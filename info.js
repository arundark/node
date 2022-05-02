import os from "os";

console.log("freemem", os.freemem() / 1024 / 1024 / 1024);
console.log("totalmem", os.totalmem() / 1024 / 1024 / 1024);
console.log("version", os.version());
console.log("cpuset", os.cpus().length);

//1kb -> 1024 bytes -> 1mb -1024> kb ->1gb ->1024mb
