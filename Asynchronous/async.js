// // Asychronous JavaScript


// // callback functions - a Function that is passed as an argument to another function
// //                      which is called after the function is executed.


// // normal method.
// function displaySum(sum){
//     document.getElementById('demo').innerHTML = `sum: ${sum}`;
// }

// const displayOddOrEven = (value) => {
//     document.getElementById('number').innerHTML = `num: ${value}`;
// }

// const displayRand = (val) =>{
//     document.getElementById('rand').innerHTML = `random Number: ${val}`;
// }

// function calculateSum(a=23, b=32){
//     let sum = a + b;
//     displaySum(sum);
// }

// calculateSum(12);  // The problem with this method is that we have to call both the functions.            


// // callback function
// function add(a, b, myCallBack){
//     let sum = a + b;
//     myCallBack(sum);
// }

// add(56, 34, displaySum);


// const integers = [0, 23, -12, -34, 12, 83, 73, -23, -56];

// function removePos(items, callback){
//     let posArray = [];
//     for (let item of items){
//         if(callback(item)){
//             posArray.push(item)
//         }
//     }
//     console.log(posArray);
// }

// //here (x) is the callback function and is passed inside removePos() as an argument.
// removePos(integers, (x) => x >= 0);     



// // Async JavaScript
// // Functions that run parallel with other functions is call Asynchronous
// // SetTimeout and setTimeinterval are examples.

// // Promises
// let myPromise = new Promise(function(myResolve, myReject){
//     let x = 0;
    
//     // "The Producing Code"
//     if (x == 1){
//         myResolve("Ok");                   // fullfilled
//     }
//     else {
//         myReject("error");                    // rejected.
//     }
// });

// myPromise.then(
//     function(value){
//         displayOddOrEven(value);
//     },
//     function(error){
//         displayOddOrEven(error);
//     }
// );


// // Waiting for a Timeout 
// // using callback

// // setInterval(randomNum, 1000);

// function randomNum(){
//     let rand = Math.floor(Math.random() * 100);
//     return rand;
//     // document.getElementById('rand').innerHTML = `random number: ${rand}`;
// }


// // Using Promise
// let myNewPromise = new Promise(function(myResolve, noRandNum){
//     // The producing code
//     setInterval(myResolve, 1000);
// })

// myNewPromise.then(
//     function(value){
//         document.getElementById('rand').innerHTML = `random Number: ${value}`;
//     }
// )

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// // error link
// // const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');


// console.log(fetchPromise);

// Using Promises
// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//       for(let item of data){
//           console.log(item.name);
//       }
//   });
// });




// chaining promises and throwing errors and catching errors.
// fetchPromise.then((response) => {
//     if(!response.ok){
//         throw new Error(`Http error: ${response.status}`);
//     }
//     return response.json()
// }).then((data) => {
//     console.log(data[0].name);
// }).catch((error) => {
//     console.log(`could not get Product: ${error}`)
// });

// console.log("Started request…");


// Combining promises 
// Sometimes we need to fullfill all the promises, but they don't depend on each other.
// We can use promises.all() - It takes an array of promises and returns 
// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });



//Async and Await keyword 
//   1️⃣  They make it easier to write promises in Javascript.
//   2️⃣  async makes a function return a promise.
//   3️⃣  await makes a function wait for a promise.


// async function show(){
//   let promise = new Promise((resolve, reject) => {
//     resolve("it's working");
//   });
//   document.getElementById('demo').innerHTML = await promise;
// }

// show();


function makeRequest(location){
  return new Promise((resolve, reject) => {
    console.log(`making request to location: ${location}`);
    if (location === 'google'){
       resolve('google says hi');
    }
    else {
      reject('we can only talk to google');
    }
  });
}

function processRequest(response){
   return new Promise((resolve, reject) => {
    console.log('processing requests');
    resolve(`Extra Info + ${response}`);
   })
}

// makeRequest('google').then((response) => {
//   console.log("Response recieved");
//   return processRequest(response);
// }).then(returnedRequest => {
//   console.log(returnedRequest);
// }).catch(error => {
//    console.log(error);
// })

// ☝️ writing promises using async and await

async function procesStuff(){
  try{

      const response = await makeRequest('FaceBook');
      console.log("request Recieved");
      const processResponse = await processRequest(response);
      console.log(processResponse);
  } 
  catch(error){
      console.log(error);
  }
   
}

procesStuff();