/*Function is the block of code that performs specific task, can be invoked whenever needed.
Function parameters is a local variable , it scope only in block of the function.

1.Function definition:= function functionName(){
            // do some work
  }

2.Function call:= functionName();
             
  
3.Function functionName(para1,para2.....){
      // do some work
}

*/

// function myFunction() {
//   console.log("Welcome to Apna College !");
//   console.log("We are learning JS:");
// }
// myFunction();

// function myFunction(msg) {
//   console.log(msg);
// }
// myFunction('i love js');

// function sum(x, y) {
//   s = x + y;
//   return s;
// }
// sum(4, 5);
// console.log(s);

function sum(x, y) {
  return x + y;
}

// Arrow function foe sum.
const arrowSum = (x, y) => {
  console.log(x + y);
};

// For multiplication
function mul(x, y) {
  return x * y;
}

// Arrow function foe multiplication.
const arrowMul = (x, y) => {
  console.log(x * y);
};
