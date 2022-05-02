const double = (num) => num * 2;
console.log(process.argv);
const [, , num] = process.argv;
console.log(double(num));

// console.log("hello Dhruv");
// const double = (num) => num * 2;

// const [, , n] = process.argv;
// console.log(double(n));

// const sum = (n1, n2) => parseInt(n1) + parseInt(n2);
// const [, , n1, n2] = process.argv;
// console.log(sum(n1, n2));
