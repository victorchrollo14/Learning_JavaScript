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

// this is a function constructor
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

