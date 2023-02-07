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
console.log(`Reversed integer is: \n${reverseGivenInteger(num)}`)


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
console.log(`The reversed string is \n${reverseWords(text)}`);


// challenge 3
// Write a function which can convert the time input given in 12 hours format to 24 hours format 
const timeTo24 = (time) => {
    if (time.includes('AM')){
        return time;
    }
    else {
        let arr = time.split(':');
        let formattedTime = `${12 + Number(arr[0])}:${arr[1]}:${arr[2].slice(0, 2)} PM`;
        return formattedTime;
    }

}

let cTime = new Date().toLocaleTimeString();
console.log(`Time converted to 24 hour format: \n${timeTo24(cTime)}`);







// challenge 4
//   Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'


// challenge 5
//  Write a function to truncate a string to a certain number of words


// challenge 6
// Create a regular expression to validate if the given input is valid Indian mobile number or not


// challenge 7 
// Write a function which accepts two valid dates and returns the difference between them as number of days


// challenge 8
//   Write a function to check if an object is empty or not in javaScript?


// challenge 9
//  Write a function to remove array element based on object property?


// challenge 10
// Function which returns a random number in the given range

function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min)) + min;
}

let random = randomNumber(-555, 100);

// output: some random number.
console.log(`random number between -155 and 100: \n${random}`);















