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










