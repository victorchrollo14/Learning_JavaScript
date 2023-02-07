// working with dates in javascript


const cDate = new Date();

// output Sun Feb 05 2023 19:41:59 GMT+0530 (India Standard Time)
console.log(cDate);


const fixedDate = new Date("2023-02-15");
console.log(fixedDate);


const YMD = new Date(2023, 11, 32);

// format Date(year, month, day, hours, minutes, seconds, milliseconds);
console.log(YMD);

const milliSeconds = new Date(10000);

console.log(milliSeconds);


// Date formats
// 1) ISO format (YYYY-MM-DD) (YYYY-MM-DDTHH:MM:SSZ)
const isoDate = new Date('2015-12-14');
const isoDateTime = new Date('2020-09-13T06:30:00Z');

console.log(isoDate, isoDateTime);


// short dates (MM/DD/YYYY)
const shortDate = new Date('12/04/2023');
console.log(shortDate);


// long dates (MMM DD YYYY)
const longDate = new Date('jan 14 2023');       // month and day can be in any order
console.log(longDate);

// Date.parse()
const invalidDate = new Date('2002-11-2');
const msec = Date.parse(invalidDate);
const validDate = new Date(msec);
console.log(validDate);


// Date Get methods
// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()	        Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()            Get time (milliseconds since January 1, 1970)

const year = longDate.getFullYear();
console.log(`year in date = ${year}`);

const month = longDate.getMonth();
console.log(`month in date = ${month+1}`);  // counts month from 0

const day = longDate.getDate();
console.log(`day in Date = ${day}`);

const weekDay = longDate.getDay();
console.log(`weekday in Date: ${weekDay}`);


// set methods similar to get, but they are used to set the year, month, day etc to a date.

// Date difference 
let date1 = new Date('2015-08-12');
let date2 = new Date('2018-05-31');

const diffTime = Math.abs(date2 - date1);             // milli seconds
// 1min = 1000*60 milliseconds
// 1hour = min * 60;
// 1day = hour * 24;
// 1month = day * 30;
// 1year = day * 365

console.log(`time diff in milliseconds: ${diffTime}`);

let minDiff = diffTime/(1000 * 60);
console.log(`min difference: ${minDiff}`);

let hourDiff = diffTime/(1000 * 60 * 60);
console.log(`hour difference: ${hourDiff}`);

let dayDiff = diffTime/(1000 * 60 * 60 * 24);
console.log(`day difference: ${dayDiff}`);

let yearDiff = Math.round(diffTime/(1000 * 60 * 60 * 24 * 365) * 100)/100;
console.log(`yeat differnce: ${yearDiff}`);


// 24hour and 12 hour format
let time12 = new Date().toLocaleTimeString('en-US');     // 12hr time format

// output: 2/7/2023
console.log(cDate.toLocaleDateString('en-US')); 

// output: 10:54:55 AM         
console.log(time12);

let time24Format = cDate.getHours() + ":" + cDate.getMinutes() +":" + cDate.getSeconds();
console.log(time24Format);


