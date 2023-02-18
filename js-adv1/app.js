let person = "Michael";

// Template literal
const message = 
`Hi, ${person}

Thanks for subscribing to the email list.

regards,
Victor`

console.log(message);


// Destructuring of Arrays in JavaScript
let alphabets = ["A", "B", "C", "D", "E", "F"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// normal 
let a = alphabets[0], b = alphabets[1];
console.log(a,b);

// destructuring 
let [A, ,B, ...rest] = alphabets;
console.log(A, B)
console.log(rest);

// concatenate normal
const newArray1 = alphabets.concat(numbers);
console.log("normal array concat:\n");
console.log(newArray1);


// destructuring
const newArray2 = [...alphabets, ...numbers];
console.log(`destructured array concat:\n`);
console.log(newArray2);

// Destructuring in functions
function arithematic(x, y){
    return [x+y, x-y, x*y, x/y];
}

let all = arithematic(2, 4);
console.log(all);

let [addition, diff, pro, division] = arithematic(10, 19);
const operations = {
    '+': addition,
    '-': diff,
    '*': pro,
    '/': division
}
console.log(operations['+']);


//Destructuring in Objects
const Human = {
    firstName: 'Victor',
    lastName: "chrollo",
    gender: "male",
    Address: {
        city: "Bangalore",
        state: "Karnataka"
    },
    age: 20

}

const Human2 = {
    IQ: 332,
    metaCognition: "complete"
}

const {firstName, age, lastName = "Immanuel", ...args} = Human;
console.log(firstName, lastName, age);
console.log(args);

const newGenHuman = {...Human, ...Human2};
console.log(newGenHuman);


function printUser({firstName, lastName, age}){
    console.log(`The user name and age are ${firstName} ${lastName}, ${age}`);
}

printUser(newGenHuman);



