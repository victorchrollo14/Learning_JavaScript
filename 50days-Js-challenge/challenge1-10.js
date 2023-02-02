// challenge 1
// Write a program to reverse a given integer number

const num = 1002;
let temp = 0; revNum = '';

function reverseGivenInteger(num) {
    // write your solution here
    while (num !== 0){
        temp = num % 10;
        revNum += temp;
        num = Math.floor(num/10);
    }
    return Number(revNum);
}
// output: 2001
console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)


// challenge 2
// Write a program to reverse the charaters in each word in a given string.

const text = "'hi' What are you learning currently";
let revWordString = '';
const reverseWords = (text) => {
    let words = text.split(' ');
    words.forEach((word, i, arr) => {
        arr[i] = word.split('').reverse().join('');
    });

    revWordString = words.join(' ');
    return revWordString;
}
// output: 'ih' tahW era uoy gninrael yltnerruc
console.log(reverseWords(text));













