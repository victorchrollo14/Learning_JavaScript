// challenge 1
// Write a program to reverse a given integer number

const num = 1002;

function reverseGivenInteger(num) {
    // write your solution here
    let revNum = String(num).split('').reverse().join('');
    return Number(revNum);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)


// Function which returns a random number in the given range












