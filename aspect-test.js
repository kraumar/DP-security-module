// const myLog = logMsg => {
//   let now = new Date();
//   console.log(logMsg);
//   console.log("Function was called at: " + now);
// };

// logBefore = (fn, logMsg) => {
//   return () => {
//     console.log(logMsg);
//     return fn();
//   };
// };

// const add2to5 = () => {
//   return 2 + 5;
// };

// const add3to5 = () => {
//   myLog("adding 3 + 5");
//   return 3 + 5;
// };

// let add2to5Log = logBefore(add2to5, "Adding 2 to 5");
// console.log(add2to5Log());

// console.log(add3to5());
// console.log(add2to5());

const logBefore = (fn, logMsg) => {
  return function() {
    console.log(arguments);
    return fn.apply(this, arguments);
  };
};

let add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

add = logBefore(add, "adding two numbers");
console.log(add(2, 3));

// function FirstFactorial(num) {
//   // code goes here
//   if (num === 0 || num === 1) {
//     return 1;
//   }

//   return FirstFactorial(num - 1) * num;
// }

// // keep this function call here
// console.log(FirstFactorial(5));
