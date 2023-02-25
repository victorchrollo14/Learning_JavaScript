// Object - an identifiable entity that has some characteristics(property) and behaviour(methods);
// objects are same as dictionaries in python
// Objects are mutable, they are addressed by reference , not value;

// car 
const Car = {
    name:  "Tesla",                  // property
    model: "y354",                  // property
    color: "black",                // property
    // method
    features: function(){                       
        return `${this.name} ${this.model} ${this.color} "is a super fast car with good milege"`;
    }
}

// properties or characteristics
console.log(`The properties of Car are: ${Car.name}, ${Car.model}, ${Car.color}`);

// methods or behaviour
console.log(`Car Features: ${Car.features()}`);

// looping through properties
for (let property in Car){
    console.log(property, Car[property]);
}

// adding new Properties
Car.speed = '320km/h';
console.log(Car);

// Removing properties
delete Car.model;           // Do not use of in-built objects.
console.log(Car);

// adding a new method
Car.fullName = () =>{
    const full = `${Car.name} ${Car.color}`;
    return full.toUpperCase();
}

console.log(Car);

//Object.values()
const myArray = Object.values(Car);  // converts Object values to array
console.log(myArray);

//JSON.stringify()
const myString = JSON.stringify(Car);  // converts Objects to string
console.log(myString);
// Does not stringfy functions

console.log(JSON.stringify(myArray))  // converts all array items to string


// Accesors(Getters and Setters)
const person = {
    firstName: "victor",
    lastName: "Immanuel",
    age: 20,
    language: "",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set lang(lang){
        this.language = lang.toUpperCase()
    }
}

// the fullname function is treated as a property
console.log(person.fullName);  // simpler syntax

person.lang = "Kannada";
console.log(person.language);


// why use Setters and getters
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes



