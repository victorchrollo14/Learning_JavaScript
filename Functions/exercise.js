/* 
   1️⃣ Write a function to find if a number is a palindrome or not. Take number as parameter.
           a number that remains same on reversal - 1221 => 1221, 12321 => 12321

   2️⃣ Convert the programs in flow of program, first java, conditionals & loops assignments into functions.

   3️⃣ Write a function to check if a given triplet is a Pythagorean triplet or not. (A Pythagorean triplet is when the sum of the square of two numbers is equal to the square of the third number). 345 = 3^2 + 4^2 = 5^2 => 9 + 16 = 25;

   4️⃣ Write a function that returns all prime numbers between two given numbers.

   5️⃣ Write a function that returns the sum of first n natural numbers.

*/

// 1️⃣  Palindrome Number
const palindrome = (num) => {
   let lasDigit, revNum = '', tempNum = num;
   while(num !== 0){
      lasDigit = num % 10;
      revNum += lasDigit;
      num = Math.round(num/10);
   }
   if (revNum == tempNum) {
      return `${tempNum} is a palindrome number`;
   } 
   else {
      return `${tempNum} is not a palindrome number`;
   }
   
      
}

let z = palindrome(1223221);
console.log(z);


// 3️⃣ pythogoran triplet
let temp = 1;
const pythogoranTriplet = (a, b, c) => {
      if (a**2 + b**2 === c**2){
         console.log(`${a}, ${b} and ${c} are pythogoran triplets`);
      } else {
         console.log(`${a}, ${b} and ${c} are not pythogoran triplets`);
      }
}

pythogoranTriplet(4, 8, 12);

