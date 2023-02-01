// Learning strings and string methods in javascript

const message = "Hi, How do you do";

// lenght of string
let lngth = message.length;
console.log(lngth);

// getting a character at a location
console.log(message[0]);
console.log(message[message.length - 1]); // to retrive the last character.

// Testing if a string contains a substring 

const browser = 'firefoxMozillaChrome'
let includes = browser.includes('moz');  // returns true if exists else false.
console.log(includes);

// startsWith
if (browser.startsWith('fire')){
    console.log('starts with fire');
} else {
     console.log('does not start with fire');
}

// endsWith 
if (browser.endsWith('chrome')){
    console.log("ends with chrome");
} else {
    console.log('does not end with chrome');
}


// Finding the index or position of a substring of a string.
const text = 'This is the end of the line, the end';
let firstOccurance = text.indexOf('end');
let what = text.indexOf('what');           // returns -1 since character doesnot exist
let secondOccurance = text.indexOf('end', firstOccurance + 1);   // finding the second occurance.

console.log(secondOccurance);

// Extracting a substring from string
const color = 'orange';
let extract = color.slice(0, 3);  
console.log(extract);

// changing case
// toLowerCase() and toUpperCase()
console.log(color.toLocaleLowerCase());
console.log(color.toUpperCase());


// Updating parts of a string.
// replace() and replaceAll()

console.log(text.replace('end', 'beginning'));    // replaces the first occurance of a character
console.log(text.replaceAll('end', 'beginning'));   // replace all the occurances of a character