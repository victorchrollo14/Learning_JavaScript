/*  
    UnderStanding the syntax for writing 
    conditional statements and loops in javaScript.

*/

// conditonals
// if
// else
// else if
// switch


// syntax
let num = 89;
if (num%2 == 0){
    console.log(`${num} is an even number`);
}  else {
    console.log(`${num} is an odd number`);
}

let age = 38;
if (age > 0 && age < 10){
    console.log(`you are a child`);
} else if (age >= 11 && age <= 19){
    console.log('you are an adolescent');
} else if (age >19 && age <= 30){
    console.log("you think you are an adult");
} else {
    console.log("you are an adult");
}


// Switch case syntax
let char = 'E';

switch(char.toLowerCase()){                              // Switch uses strict comparison '===' - same value, same type;
    case 'a':
        console.log(`${char} is vowel`);
        break;
    case 'e':
        console.log(`${char} is vowel`);
        break;
    case 'i':
        console.log(`${char} is vowel`);
        break;
    case 'o':
        console.log(`${char} is vowel`);
        break;
    case 'u':
        console.log(`${char} is vowel`);
        break;
    default:
        console.log(`${char} is a consonant`);
        break;
    
}


// When two cases returns the same output.
let text = '';
switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text);













