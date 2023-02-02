// Array - an array is a collection of elements of the same datatype.

/*   All array methods:
     0️⃣ array.length - returns the lenght of the array.
     1️⃣ array.toString() - converts the array into a string.
     2️⃣ array.join('seperator') - converts an array to a string, can also add a seperator.

     ADDING AND REMOVING ELEMENTS
     3️⃣ array.pop() - removes and returns the last element of an array.
     4️⃣ array.push('element') - adds a new element to the end of the array.
     5️⃣ array.shift() - removes and returns the first element of an array.
     6️⃣ array.unshift("element") - add a new element at the front of the array.
     
     MERGING AND CONCATENATION
     1️⃣ ARRAY1.concat(ARRAY2, array3) - Combines two or more arrays into one.
     
     INDEX
     1️⃣ array[index] - To access an element at a certain index.

     SLICING AND SPLICING
     1️⃣ array.splice(newItemPos, noItemToDel, "item1", "items2") - it is used to add new items to an array.
     2️⃣ array.slice(startPos, endPos) - it removes the elements within  a given index range. If the ending range is not given, then all 
                                         the items till the end will be removed. 
     3️⃣ array.reverse() - it returns the array reversed.
*/

const arr = ["pizza", "banana", "orange", "pineapple", "guava"];
const arr2 = ["moon", "sun", "jupiter", "asteroids", "space-monkey"];

// array.length
let length = arr.length;
console.log(length);


// concatenation
let merge = arr.concat(arr2);
console.log(merge);


// every
const ages = ['23', '21', '18', '62', '12'];
let allChild = ages.every(checkAdult);

function checkAdult(age){
     return age >= '18';
}

console.log(allChild);  // returns false since one item fails the test.


// entries
const animals = ["giraffe", "mountain lions", "gorilla", "dinosaur"];
let entries = animals.entries();
for (let entry of entries){
     console.log(entry);
}

// output: returns a key value pair of each item.
// Array [ 0, "giraffe" ]
// Array [ 1, "mountain lions" ]
// Array [ 2, "gorilla" ]
// Array [ 3, "dinosaur" ]


// filter
let speedFilter = (speed) => {         // returns all the values whose speed >= 100
     return speed >= 100;
}
const speeds = [121, 123, 142, 160, 200, 54, 78, 321, 200];
let highSpeed = speeds.filter(speedFilter);

// output [ 121, 123, 142, 160, 200, 321 ]
console.log(highSpeed); 


// find
let speed200 = speeds.find(findElement);

function findElement(speed){
     return speed == 200;
}

// output: 200
console.log(speed200);


//findIndex
let highSpeedIndex = speeds.findIndex(findPostion);
function findPostion(speed){
     return speed > 130;
}

console.log(highSpeedIndex);


// forEach()
const boostSpeed = (speed, index, arr) => {
     arr[index] = speed + 100;
}
speeds.forEach(boostSpeed);

// output: [ 221, 223, 242, 260, 300, 154, 178, 421, 300 ]
console.log(speeds);

