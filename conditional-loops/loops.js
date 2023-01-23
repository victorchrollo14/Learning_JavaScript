// Understanding Loops in JavaScript

// We use loops when we need repeat something again and again i.e iteration.

// There are 3 types of loops
/*   For 
     while 
     do while  */


let sum = 0, sum1=0, sum2=0;
let txt = "";
let carList = '', carList1 = '', carList2='';
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let person = {
    fname:'victor',
    lname:'Immanuel',
    age:'19'
};


// For Loop syntax
for (let i = 1; i<=10; i++){
    sum = sum + i;
}
console.log(`The sum:${sum}`);


// looping over array values
for (let i = 0; i<cars.length; i++){          // cars--> arrayName, i---> index, cars[i] --> used to access item at index i;
    carList1 += cars[i] + " ";                         // i cannot be accessed outside the for loop, since it is declared with let.
}                                          
console.log(carList1)


// For in loop (syntax) 
// The 'for in' loop is used to iterate through the properties of an object;
for (let i in person){                  
    txt += `${person[i]} `;                     // person --> ObjectName, i --> key, person[i] --> returns value of key i
}                                                   // ObjectName[key] == value;
console.log(txt);


// for in over arrays
for (let i in cars){                            // i --> index in arrays  
    carList += `'${i}:${cars[i]}' `                // similar to for, without (i=0, condition, increment/decrement)
}
console.log(carList);


// For of loop 
// The JavaScript for of statement loops through the values of an iterable object.
for (let car of cars){                               
    carList2 += cars.indexOf(car) + ":" + car + ' ';                    // similar to 'for loop' in python
}                                                                           // arrayName.indexOf(item) --> returns index of the item;
console.log(carList2);


// For loop in string
let str = ''
for (let char of carList){                          
    str += `${char} `;
}
console.log(str);


// while and do while
let i = 1;
while(i <= 0){
    sum1 += i;
    i++;
}
console.log(`sum1: ${sum1}`);


let j = 1;
do{                                                  // do while - executes atleast once, even if the condition is false;              
    sum2 += j;
    j++;
    
} while(j <= 0);

console.log(`sum2: ${sum2}`);