// More concepts in functions like call(), apply(), bind() and this keyword.

// assigning the object method a function.
const myObject = {
    firstName:"John",
    lastName: "Doe",
    // fullName is a method of myObject, which is a function.
    fullName: function () {
        return this.firstName + " " + this.lastName;                   // this refers to myObject
                                                                // could be written as myObject.firstName , myObject.lastName.
    }
  }

console.log(myObject.fullName());

// this is a function constructor - a function that initializes a constructor
function Cat(name, color){
    this.name = name;
    this.color = color;
}

// creating a new instances/Object of the Cat function.
const beerus = new Cat('beerus', 'purple');

// returns the new object beerus.
console.log(beerus);


// call() - The call() method is a predefined JavaScript method.
//          It can be used to invoke (call) a method with an owner object as an argument (parameter).

// apply() - similar to call()

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const p1 = {
    firstName: "Naruto",
    lastName: "uzumaki"
}

const person2 = {
    firstName: "Hinata",
    lastName: "hyuga"
}

let naruto = person.fullName.call(p1);
console.log(naruto);

let hinata = person.fullName.apply(person2);
console.log(hinata);


// bind() - using a bind method, an object can borrow a method from another object.
//          also used in preserving this keyword, when a function is used as callback.

const marks = {
    math: 87,
    physics: 54,
    biology: 99,
    average: function(){
        return (this.math+this.physics+this.biology)/3;
    },
    sum: function(){
        return (this.math + this.physics + this.biology);
    }
}

console.log(marks.average(), marks.sum());

const vilasMarks = {
    math: 95,
    physics: 70,
    biology: 87
}

let vilasTotal = marks.sum.bind(vilasMarks);
let vilasAvg = marks.average.bind(vilasMarks);
console.log(vilasTotal(), vilasAvg());

// closures
// closures are used to make Global variables local.

function myFunction(){
    a = 10;
}
myFunction();
console.log(a*a);

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  console.log(add());
  console.log(add());
  console.log(add());

// this keyword
// It refers to an object.
// It refers to different objects depending on how it is used.

// Precedence	    Object
//  1	            bind()
//  2	            apply() and call()
//  3	            Object method
//  4 	            Global scope


const fruits = {
    apple: 0,
    mango: 87,
    orange: 32,
    total: function(){
        // return this.apple + this.mango + this.orange;
        return this;                                              // refers to the fruits object.
    }
}

console.log(fruits.total());


// when used alone, refers to global object ie window object.
let x = this;
console.log(x.document.body);

"use strict";
let y = this;
console.log(y);                // even in strict mode, this still returns window object.


// this in a function 
function Name(){
    return this;
}

console.log(Name())                   // still refers to global object

"use strict";
function newName(){
    console.log(this);
}

newName();


// new keyword
// The new operator lets developers create an instance of a user-defined object type 
// or of one of the built-in object types that has a constructor function.

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Hawkeye", "Kimimaru96", "1991");        // creating a new instance of Car() object.

console.log(car1);
