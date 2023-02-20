// Asychronous JavaScript

// callback functions - a Function that is passed as an argument to another function
//                      which is called after the function is executed.


// normal method.
function displaySum(sum){
    document.getElementById('demo').innerHTML = `sum: ${sum}`;
}

function calculateSum(a=23, b=32){
    let sum = a + b;
    displaySum(sum);
}

calculateSum(12);  // The problem with this method is that we have to call both the functions.            


// callback function
function add(a, b, myCallBack){
    let sum = a + b;
    myCallBack(sum);
}

add(56, 34, displaySum);


const integers = [0, 23, -12, -34, 12, 83, 73, -23, -56];

function removePos(items, callback){
    let posArray = [];
    for (let item of items){
        if(callback(item)){
            posArray.push(item)
        }
    }
    console.log(posArray);
}

//here (x) is the callback function and is passed inside removePos() as an argument.
removePos(integers, (x) => x >= 0);     
