// Functions in JavaScript
// Function is a block of code that does a particular task.
//      😃 It enables us to divide the code into smaller parts, which makes it easier to debug.
//      😄 JavaScript Functions are hoisted, i.e we can use then before declaring.
//      😅 Functions are objects, i.e functions have characteristics and behaviour (properties and methods);


// 0️⃣ es5 syntax
function myFunction(a, b){       // creating a function   
   return a*b;
}

myFunction(1, 4);   // calling/invoking a function



// 1️⃣ assing a function expression to a variable
//     📔  The below declared function is an anonymous function, you cannot invoke it;
//     📔  You can use the function using the variable name;
/*     📔  const x = function (a, b){return a+b}; or 
👇               */
const x = function add(a, b){ return a+b};

let y = x(3, 4);      // now x acts as the function
console.log(y);



// 2️⃣ Declaring a function using 'Function()' constructer and 'new' keyword
const minus = new Function('a', 'b', 'return a - b');   
let z = minus(6, 8);

console.log(z);



// 3️⃣ Self invoking functions
//     📔 Functions that can invoke themselves are known as self invoking functions
//     📔 add () after a function expression.

(function(){
   console.log("I called myself");
})();



// 4️⃣ Arrow Functions  (Es6)
//     📔 They enable you to declare a function without 'function' keyword  and return 'keyword'
//     📔 They are not well suited for defining object methods, and they are not hoisted.
//     📔 you can only omit return keyword if function is single statement.

const product = (c, d) => c * d;

const prod = (e, f) => {            
      let value = e*f;
      return (value);            // need to use 'return' keyword, if statements are not single line.
}

console.log(product(23, 12));
console.log(prod(25, 73));



// 5️⃣ Parameters

// default parameters
const newFunc = function(h=3, i=4){return h%i};       // default arguments can be used when a functions is called without parameteres
console.log(newFunc(89));

// function Rest (...) parameter
//      📔 similar *args in python, where you can pass a array of arguments to a function.

function sum(...args){
   let sum = 0;
   for (let arg  of  args){
      sum += arg;
   }
   return sum;
}

let addValue = sum(2, 34, 23, 23 , 87, 234);
console.log(`sum: ${addValue}`);

// Arguments Object
//   📔 Javascript functions has an inbuilt object called as arguments object.
//   📔 It contains an array of arguments passed inside a function

function maxNum(){
   let max = -Infinity;
   for(let i of arguments){
         if (i > max);
         max = i;
   }
   return max;
}

let maxVal = maxNum(12, 10, 78, 1, 69, 23, 18, 2, 90);
console.log(`max value: ${maxVal}`);