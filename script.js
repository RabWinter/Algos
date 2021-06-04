// Reverse letters without reversing the order of words
// function reverseString(str) {
//     return str.split(' ').map(function (word) {
//       return word.split('').reverse().join('')
//     }).join(' ')
//   };
// console.log(reverseString('Hello you Cont'));

// split, map(func(word) split, reverse, join, join.)
// Spit the words at the spaces, map them, pass in word, split the letters of each word, reverse the letters, join them, join the string and word outside
// function reverseString(str) {
//     return str.split(' ').map(function (word) {
//         return word.split('').reverse().join('')
//     })
// }
// console.log(reverseString('You cont'));

/////////////////////////////////////////////////////

// Time
// function displayTime() {
//   const date = new Date();
//   const time = date.toLocaleTimeString();

//   document.querySelector(".clock").textContent = time;
// }
// displayTime();
// const createClock = setInterval(displayTime, 1000);

/////////////////////////////////////////////////////

// Convert km/h to cm
// First work out the seconds in 1 hour = 3600
// cm in 1km  = 10,000
// 3600 / 10,000 = 0.360
// s / 0.360
// function cockroachSpeed(s) {
//     const milli = 3600;
//     const cm = 3600 / 10000;
//     return s / cm;
// }
// console.log(cockroachSpeed(45));

// const speed = s => Math.floor(s / 0.360);
// console.log(speed(45));

////////////////////////////////////////////////////////////

// Total people = those on the bus and those waiting
// If the capacity is more than or equal to the total number of people then nobody can get on = 0.
// If the capcity is less than the total number of people then to workout the number of free seats then total - capacity.
//
// function enough(cap, on, wait) {
//   let totPeople = on + wait;
//   if (cap >= totPeople) return 0;
//   if (cap < totPeople) return totPeople - cap;
// };
// console.log(enough(100, 60, 50));

// function enough2(cap, on, wait) {
//     return Math.max(on + wait - cap, 0)
// }
// console.log(enough2(100, 60, 50));

/////////////////////////////////////////////////////////////

// If there is dolphin then the shark's speed is cut in half
// My time  = the distance to the pontoon / by my speed
// Shark time = the distance between the shark and me / by the shark's speed
// If my time is less than the shark then I survive
// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
//     if (dolphin) {
//         sharkTime = sharkSpeed / 2
//     };

//     let myTime = pontoonDistance / youSpeed;
//     let sharkTime = sharkDistance / sharkSpeed;
//     return myTime < sharkTime ? 'Alive' : 'Shark Bait';
// }
// console.log(shark(24, 0, 4, 8, false));

/////////////////////////////////////////////////////////////////

// const quarterOf = (month) => {
//     if (month <= 12 && month >= 10) return 4;
//     if (month <= 9 && month >= 7) return 3;
//     if (month <= 6 && month >= 4) return 2;
//     else return 1;
// };

// console.log(quarterOf(12));

// Math.ceil willl round up to the next whole integer regardless if the result is closer to the lower number
// const quarterOf = (month) => {
//     return Math.ceil(month / 3)
// }
// console.log(quarterOf(12));

// const quarterOf = (month) => {
//     return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;

// }
//   console.log(quarterOf(12));

///////////////////////////////////////////////////////////////

// function square(number) {
//     return Math.sqrt(number);
// }
// console.log(square(16));

////////////////////////////////////////////////////////////////

// function sum(numbers) {
//     const arr = [2,3,4,5]
//   return arr.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sum());

/////////////////////////////////////////////////////////////

// const reverseSeq = (n) => {
//     const arr = [6,4,2,7,9,5,3]
//   return arr.sort((a, b) => b - a);
// };
// console.log(reverseSeq());

// const reverseSeq = n => {
//     let arr = [];
//     for (i = n; i > 0; i--) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(reverseSeq(8));

// This creates a new array, fill to fill in the other numbers, map with mov & i to loop through each increment of 1 then reverse
// const reverseSeq = (n) => {
//   return new Array(n).fill().map((mov, i) => i + 1).reverse();
// };
// console.log(reverseSeq(8));

// Here, we use Array.from creates a shallow copy of an array. then we pass in an object as an argument with length set to number. then, the second argument in from is an anon function which counts down the number -1.
// const reverseSeq = number => Array.from({length: number}, () => number--)
// console.log(reverseSeq(8));

///////////////////////////////////////////////////
// Odd or Even

// function even_or_od(n) {
//   return n % 2 === 0 ? "Even" : "Odd";
// }
// console.log(even_or_od(3));

///////////////////////////////////////////////////
// Number Format

// const number = 500000;

// function formatMoney(amount) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//     useGrouping: false,
//   }).format(number);
// }
// console.log(formatMoney(number));

// const number = 1036.00;

// function formatMoney(amount) {
//   return '$' + number.toFixed(2);
// }
// console.log(formatMoney(number));

////////////////////////////////////////////////////

// function bmi(weight, height) {
//   const result = weight / (height * height);
//   return result < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

// }
// console.log(bmi(100, 1.80));

///////////////////////////////////////////////////

// function paperwork(n, m) {
//   return n < 0|| m < 0 ? '0!' : n * m;
// }
// console.log(paperwork(5, 5));

////////////////////////////////////////////////
// US to EU floor numbers

// function getRealFloor(n) {
//   n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// };
// console.log(getRealFloor(2));

// const getRealFloor = n => {
//   if (n >= 13) return n - 2
//   if (n > 0) return n - 1
//   return n
// };

///////////////////////////////////////////////

// function reverseWords(str) {
//   return str.split(' ').reverse().join(' ');
// }
// console.log(reverseWords("The greatest victory is that which requires no battle"));

/////////////////////////////////////////////
//
// function squareSum(n) {
//   return n.map((n) => n * n).reduce((acc, cur, i) => acc + cur, 0);
// }
// console.log(squareSum([1, 2, 2]));

/////////////////////////////////////////////////////////

// function century(year) {
//   const cenYear = 1900;
//   const convertedYear = String(cenYear).slice(0, 2);
//   console.log(+convertedYear + 1);

// };

// console.log(century());

// function century(year) {
//   return Math.ceil(year / 100);
// }

// console.log(century(89));

// function cen(n) {
//     return Math.ceil(n / 100)
// }
// console.log(cen(101));

////////////////////////////////////////////////////////
// Multiplication Table
// Spread out a new array with number of iterations passed in
// Map through it, 1st parameter is not needed
// Return the template str with the counter, number, result calculation
// Join with escape new line

// function table(n) {
//     return [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${i * n + n}`).join('\n');
// }

// console.log(table(5));

// function multiTable(n) {
//   return [...Array(20)].map((_, i) => `${i + 1} * ${n} = ${n * i + 5}`).join('\n');
// }
// console.log(multiTable(5));

////////////////////////////////////////////////////////
// Convert s => ms elapsed since 00:00
// function past(h, m, s){
//   return ((h * 3600) + (m * 60) + s) * 1000;
// };
// console.log(past(0,1,1));

// We can
// function past(h, m, s){
//   const setTime = new Date().setHours(h, m, s);
//   const midnight = new Date().setHours(0, 0, 0);
//   console.log(Math.round(setTime - midnight));

// };
// past(1, 0, 0);

// const bigDay = new Date();
// console.log(bigDay.setHours(7));

/////////////////////////////////////////////////////

// function setAlarm(employed, vacation) {
//   if (employed == true && vacation == true) {
//     return false;
//   }
//   if (employed == false && vacation == true) {
//     return false;
//   }
//   if (employed == false && vacation == false) {
//     return false;
//   }
//   if (employed == true && vacation == false) {
//     return true;
//   }
// }

// const setAlarm = (employed, vacation) => employed && !vacation;
// console.log(setAlarm(false, true));

//////////////////////////////////////////////////

// function sumStr(a, b) {
//     return (+a + +b) + '';
// }
// console.log(sumStr('4', '5'));

// function sumStr(a, b) {
//     let num1 = +a;
//     let num2 = +b;
//     return String(num1 + num2);

// }
// console.log(sumStr('', '9'));

///////////////////////////////////////////////////
// Descending Order - number
// ParseInt will convert the passed in string to a number
// Split, Sort(no parameters), reverse, join;

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''));
// };
// console.log(descendingOrder(36790));

///////////////////////////////////////////////////

// function getDrinkByProfession(param) {

//     const drinks = {
//         'jabroni': 'Patron Tequila',
//         'school counselor': 'Anything with Alcohol',
//         'programmer': 'Hipster Craft Beer',
//         'bike gang member': 'Moonshine',
//         'politician': 'Your tax dollars',
//         'rapper': 'Cristal',
//     }
//     return drinks[param.toLowerCase()] || 'Beer';
// };
// console.log(getDrinkByProfession('jabroni'));

// function getDrinkByProfession(param) {

//     param.toLowerCase();
//     switch (param) {
//         case 'jabroni': return 'Patron Tequila';
//         case 'school counselor': return 'Anything with Alcohol';
//         case 'programmer': return 'Hipster Craft Beer';
//         case 'bike gang member': return 'Moonshine';
//         case 'politician': return 'Your tax dollars';
//         case 'rapper': return 'Cristal';
//         default: return 'Beer';
//     };
// };

// console.log(getDrinkByProfession('Programmer'));

////////////////////////////////////////////////

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if(dolphin) sharkSpeed /= 2;

//     return pontoonDistance / youSpeed > sharkDistance / sharkSpeed ? 'Shark Bait!' : 'Alive!';
// }
// console.log(shark(12, 50, 4, 8, true));

///////////////////////////////////////////////////

// function multiTable(n) {
//     return [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${n * i + n}`).join('\n')
// };
// console.log(multiTable(5));

/////////////////////////////////////////////////////

// const arr = n => n === undefined ? [] : [...Array(n)].map((_, i) => i++);

// console.log(arr());

///////////////////////////////////////////////////

// function sum(n) {
//     return n.reduce((acc, i) => acc + i, 0);
// }

// const sum = n => n.reduce((acc, i) => acc + i, 0);

// console.log(sum([1, 5.2, 4, 0, -1]));

/////////////////////////////////////////////////////

// const reverseSeq = number => {
//     // return new Array(n).fill().map((_, i) => i + 1).reverse();
//     return Array.from({ length: number }, () => number--)
// };
// console.log(reverseSeq(5));

////////////////////////////////////////////////
// This is in place of a switch statement
// The 'n' corresponds with the index

// const switchIt = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n];

// console.log(switchIt(0));

///////////////////////////////////////////////////
// Match letters with index number

// function alphabetPosition(text) {
//     const letters = 'abcdefghijklmnopqrstuvwxyz';

//     return text.toLowerCase().split('')
//         .filter(i => letters.indexOf(i) > -1)
//         .map(i => letters.indexOf(i) + 1)
//         .join(' ');
// }
// console.log(alphabetPosition('Rabert'));

// function alphaPos(text) {
//     return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
// }
// console.log(alphaPos('Rabert'))

///////////////////////////////////////////////////

// const litres = time => Math.floor(time * 0.5);

// console.log(litres(12.3));

///////////////////////////////////////////////////

// function testEven(n) {
//     return n % 2 === 0;
// }
// console.log(testEven(0.5));

///////////////////////////////////////////////

// function repeatStr (str, n) {
//     return str.repeat(n);
// };
// console.log(repeatStr('Rabert', 3));

//////////////////////////////////////////////////

// function arrayPlusArray(arr1, arr2) {
//     return [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0);
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

////////////////////////////////////////////////////

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
// };
// console.log(capitalizeWord('rabert'));

////////////////////////////////////////////////////
// Delete zeros
// const noZero = n => {
//     return String(n).replace(/0+$/,'');
// }
// console.log(noZero(1050));

//////////////////////////////////////////////////

// const check = (a, x) => a.includes(x);
// console.log(check([56]));

/*
  (4) Eliminate all the overhead setup.
      Use the ES2015 SOME method to see if one or more
      of the array entries matches our target.
      Written in the form of a lambda (arrow function) to make it streamlined
    
    const check = (a,x)=>a.some(v=>v==x)
*/

/*
(3) Filter the Array
    Reduce it down to matching values or an empty set ... [66]
    Test the length of the array   [66].length > 0

  function check(a,x){
    return (a.filter(v=>v==x)).length > 0
  }
*/

/*
(2) Walk the array without ability to break the loop.
    Create a variable to hold the state of our match.
    Check if the target is found and return the findings

  function check(a,x){
    let foundTarget = false
    a.forEach((v,i,A)=>{
      if (v==x){ foundTarget = true}
    })
    return foundTarget
  }
*/

/*
  (1) Manually Walk the array, 
    Break out of the loop (return true) if you find a match
    otherwise return false

  function check(a,x){
    for (let i=0; i<a.length;i++){
      console.log(a[i])
      if (a[i]==x){ return true }
    }
    return false
  }
*/

/////////////////////////////////////////////////

// function firstNonConsecutive (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] !== arr[i] + 1) return arr[i + 1];
//   }
//   return null;
// };
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// function nonConsecutive(arr) {
//   const result = arr.find((val, i) => val !== i + arr[0]);
//   return (Number.isInteger(result)) ? result : null;
// }
// console.log(nonConsecutive([1, 2, 3, 4, 6, 7, 8]));

/////////////////////////////////////////////////

// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);
// };
// console.log(getAverage([1,2,3,4,5]));

///////////////////////////////////////////////

// const reverse = str => {
//   return str.split(' ').reverse().join(' ')
// }
// console.log(reverse('yoda no speak like this'));

//////////////////////////////////////////////////

// function squareSum(n){
//   return n.map(mov => mov * mov).reduce((acc, cur) => acc + cur, 0);
// };
// console.log(squareSum([1,2]));

//////////////////////////////////////////////////
// Warn the sheep!

// function warnTheSheep(q) {
//   return q[q.length - 1] === 'Wolf' ? 'Pls go away and stop eating my sheep' : `Oi! Sheep ${q.length - (q.indexOf('wolf') + 1)}! You are about to be eaten by a wolf!`
// };

// console.log(warnTheSheep(["sheep", "wolf", "sheep"]));

// function warnTheSheep(q) {
//   const sheepindex = q.length - q.indexOf('wolf') - 1;
//   if (sheepindex === 0)
//     return 'Pls go away and stop eating my sheep';
//     return `Oi! Sheep number ${sheepindex}! You are about to be eaten by a wolf!`;
// };

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));

// const warnSheep = q =>
//   q.reverse()[0] === 'wolf'
//     ? 'Pls go away and stop eating my sheep'
//     : `Oi! Sheep number ${q.indexOf(
//         'wolf'
//       )}! You are about to be eaten by a wolf!`;

// console.log(
//   warnSheep([
//     'sheep',
//     'sheep',
//     'sheep',
//     'sheep',
//     'sheep',
//     'wolf',
//     'sheep',
//     'sheep',
//   ])
// );

//////////////////////////////////////////////////////

// function areYouPlayingBanjo(name) {
//   return name[0].includes('R') || name[0].includes('r')
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo('Rabert'));
// console.log(areYouPlayingBanjo('Martin'));
// console.log(areYouPlayingBanjo('rolf'));

// function areYouPlayingBanjo(name) {
//   return name[0].toLowerCase() === 'r'
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo('Rabert'));
// console.log(areYouPlayingBanjo('rabert'));
// console.log(areYouPlayingBanjo('Martin'));

/////////////////////////////////////////////////////////////////
// Convert -+
// const invert = arr => {
//   return arr.map(mov => mov =- mov)
// };
// console.log(invert([1,2,3,4,5]));

/////////////////////////////////////////////////////////////////

// const summation = n => {
//   return new Array(n)
//     .fill()
//     .map((_, i) => i + 1)
//     .reduce((acc, cur) => acc + cur, 0);
// };
// console.log(summation(5));

///////////////////////////////////////////////////////////

// const getPlanetName = n =>
//   [
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars',
//     'Jupiter',
//     'Saturn',
//     'Uranus',
//     'Neptune',
//   ][n - 1];

// console.log(switchIt(1));

///////////////////////////////////////////////
// Still to complete

// function generateRange(min, max, step){
//   return [...Array(min, max, step)].fill().map((mov, i) => i + 1)
// };

// console.log(generateRange(2, 10, 2));

//////////////////////////////////////////////////////

// const hello = name => name
//     ? `Hello, ${name[0].toUpperCase() + name.toLowerCase().slice(1)}!`
//     : 'Hello, World!';
// console.log(hello());

///////////////////////////////////////////////////

// const abbrevName = n => {
//   return n.split(' ').map(i => i[0]).join('.');
// }
// console.log(abbrevName('Evelin Kasemets'));

//////////////////////////////////////////////////////
// Still to complete

// function points(games) {
//   return games
//     .map(str => str.split(':').map(Number))        // Parse(convert) number
//     .map(([x, y]) => (x > y ? 3 : x < y ? 0 : 1))  // Determine Points
//     .reduce((sum, points) => sum + points, 0);     // Total Points
// }
// console.log(
//   points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
// );

////////////////////////////////////////////////////

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints >
//     classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length
//     ? true
//     : false;
// }
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 98));

////////////////////////////////////////////////////

// function position(letter) {
//   const letters = 'abcdefghijklmnopqrstuvwxyz';

//   return letter
//     .split('')
//     .filter(i => letters.indexOf(i) > -1)
//     .map(i => letters.indexOf(i) + 1)
//     .join(' ');
// }
// console.log(position('a'));

// function position(letter) {
//   const alpha = 'abcdefghijklmnopqrstuvwxyz';

//   return `Position of alphabet: ${alpha.indexOf(letter) + 1}`
// };
// console.log(position('r'));

////////////////////////////////////////////////////////

// function removeEveryOther(arr){
//   return arr.filter((_, i) => i % 2 === 0)
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

/////////////////////////////////////////////////////////

// function pointsPer48(ppg, mpg) {
//   if (mpg === 0) return 0;
//   return Math.round(((ppg / mpg) * 10) * 48) / 10;
// }
// console.log(pointsPer48(0, 0));

// function pointsPer48(ppg, mpg) {
//   if (ppg === 0) return 0;
//   return Math.round((ppg / mpg * 48) * 10) / 10;
// }
// console.log(pointsPer48(12,20));

/////////////////////////////////////////////////////////

// function peopleWithAgeDrink(age) {
//   return age < 14
//     ? 'drink toddy'
//     : age >= 14 && age < 18
//     ? 'drink coke'
//     : age >= 18 && age < 21
//     ? 'drink beer'
//     : 'drink whisky';
// }

// console.log(peopleWithAgeDrink(22));

///////////////////////////////////////////////////////

// function getEvenNumbers(numArray){
//   return numArray.filter(i => i % 2 === 0);
// }
// console.log(getEvenNumbers([2,4,5,6]));

//////////////////////////////////////////////////////

// function position(letter){
//   const letters = 'abcdefghijklmnopqrstuvwxyz';
//   return `Position of alphabet: ${letters.indexOf(letter) + 1}`;
// };

// console.log(position('c'));

///////////////////////////////////////////////////////

// function sumOfDifferences(arr) {
//   return arr
//     .sort((a, b) => b - a)
//     .map((a, i) => a - arr[i + 1] || 0)
//     .reduce((a, b) => a + b, 0);
// }

// console.log(sumOfDifferences([1, 2, 10]));
// This says sort in descending order
// Map a - arr at current position + 1 or 0
// Reduce - add the values

// function sumOfDifferences(arr) {
//   return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
// };

// console.log(sumOfDifferences([10, 4, 12]));

// This says if the there are some values in the array then carry out the calculation, else return 0

////////////////////////////////////////////////////////////

// function odds(values) {
//   return values.filter(a => a % 2); // Returns odd numbers
// };

// console.log(odds([1,3,5,6,7]));

////////////////////////////////////////////////////////////

// function hero(bullets, dragons){
//   bullets >= (dragons * 2) ? true : false;
// };

// console.log(hero(0,1));

//////////////////////////////////////////////////////////

// function findGoals(laLiga, champs, copa) {
//   const totalGoals = [laLiga, champs, copa].reduce((acc, cur) => acc + cur, 0);
//   return totalGoals;
// };

// console.log(findGoals(43, 10, 5));

///////////////////////////////////////////////////////////

// function nextId(ids){
//   return ids.sort((a, b) => a - b).reduce((a, b) => a + (a === b), 0);
// }

// console.log(nextId([0, 1, 2, 3, 5]));

// function nextId(ids) {
//   let x = 0;
//   while (ids.includes(x)) x++;
//   return x;
// };
// console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));

////////////////////////////////////////////////////////////

// const isPalindrome = x => {
//   x = x.toLowerCase();
//   if (x === x.split('').reverse().join('')) {
//     return 'Aye';
//   } else {
//     return 'Nut';
//   }
// }

// console.log(isPalindrome('Bob'));

///////////////////////////////////////////////
// Fibonacci
// const fibbonacci = num => {
//   let results = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     const prev1 = results[i - 1];
//     const prev2 = results[i - 2];
//     results.push(prev1 + prev2);
//   }
//   return results[num];
// };
// console.log(fibbonacci(3));

// const fib = n => {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(7));

// // Recursion
// let oddOrEven = n => {
//   if (n === 0) {
//     return 'Even';
//   } else if (n === 1) {
//     return 'Odd';
//   } else {
//     return oddOrEven(n - 2);
//   }
// };

// console.log(oddOrEven(10));

// function reverseString(str) {
//   if (!str) {
//     return '';
//   }

//   return reverseString(str.substring(1)) + str.charAt(0);
// }
// console.log(reverseString('69'));

/////////////////////////////////////
// Fizzbuzz

// const fizzbuzz = n => {
//   for (let i = 1; i <= n; i++) {
//     return n % 3 === 0 && n % 5 === 0
//       ? 'fizzbuzz'
//       : n % 3 === 0
//       ? 'fizz'
//       : n % 5 === 0
//       ? 'buzz'
//       : n;
//   }
// };

// console.log(fizzbuzz(15));

//////////////////////////////////////////

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomNumber(1, 20));

////////////////////////////////////
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger('111001'));

/////////////////////////////////////////

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

console.log(countdown(10));

////////////////////////////////////////

var myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.shift();
console.log(myArray.shift(['Paul', 35]));

/////////////////////////////////////

function rangeOfNumbers(startNum, endNum) {
  // Initial base condition
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1); // Calling the function against a condition - 1
    arr.push(endNum); // The end number IS the result which gives the range of numbers
    return arr;
  }
}

console.log(rangeOfNumbers(1, 5));

////////////////////////////////////

// function checkObj(obj, checkprop) {
//   if (obj.hasOwnProperty(checkprop)) {
//     return obj[checkprop];
//   } else {
//     return 'Not Found';
//   }
// }

// const conts = {
//   name: 'Hitler',
//   age: 56,
//   party: 'Nazi',
// };

// console.log(checkObj(conts));

///////////////////////////////////////

// Setup

// function updateRecords(object, id, prop, value) {
//   if (prop !== 'tracks' && value !== '') {
//     object[id][prop] = value;
//   } else if (prop === 'tracks' && !object[id].hasOwnProperty('tracks')) {
//     object[id][prop] = [value];
//   } else if (prop === 'tracks' && value !== '') {
//     object[id][prop].push(value);
//   } else if (value === '') {
//     delete object[id][prop];
//   }
//   return object;
// }

///////////////////////////////////

var myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

/////////////////////////////

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3, 4));

///////////////////////////////////////////

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow);

//////////////////////////////////////////////

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function remove2(list) {
  const [a, b, ...arr] = list;
  return arr;
}

const arr = remove2(source);
console.log(arr);

////////////////////////////////////////////

// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// };

// function makeList(arr) {
//   const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
//   return failureItems;
// }

// console.log(makeList(result.skipped));

/////////////////////////////////

// const result2 = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// };

// function makeList(arr) {
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   return failureItems;
// }

// console.log(makeList(result2.failure));

/////////////////////////////

let nests = [['Rabert'], [['Evelin']][(['deep'], [['deeper']][['deepest']])]];
/////////////////////////////////////////////

function palindrome(str) {
  const result = str.toLowerCase().split('').reverse().join('');
  return str === result ? 'Drome' : 'No Drome';
}

console.log(palindrome('A man, a plan, a canal. Panama'));

////////////////////////////////
// ES6 Classes

class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(
      `I'm a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
    );
  }
}

let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(10, 5, 'red');
myRectangle1.printDescription();
myRectangle2.printDescription();

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numberOfRequests = 0;
  }

  get area() {
    this.numberOfRequests++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);
square1.area = 25;

class cube {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }
}

let square2;

//////////////////////////////////////////////
// OOP

// Factory Function -
// This saves us from duplicating the object if we want new property values. Instead, we create a factory function which can be used by passing in the new parameters.

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('drawn');
  };
}
// Both of these methods are fine to use

Circle.call({}, 1); // This allows functions to be called
Circle.apply({}, [1]); // This allows functions to be called from another part of the app which contains an array
const another = new Circle(1);

// Primitives & Objects
// Primitives are copied by their value --- Objects are copies by their reference ie they point to their origin
// Value Types(numbers, strings, booleans, symbol, undefined, null) v Reference Types(objects, functions, arrays)

let number = 10;
function increment(number) {
  // This will only return 10, because the let and function are independent from eachother, let is global and so we never see the increment happen
  number++;
}
increment(number);
console.log(number);

// Here, the number is a property of the object so it is encapsulated and we can manipulate and handle the result
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);

/////////////////
// First char has to be a letter
// Numbers have to be at the end, there can be 2 or more
// Upper or lower case
// Has to be at least 2 char long and only letters

///////////////////////////////////////////////////////

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
    },
  },
};

// function addMate(obj, friend) {
//   obj.data.friends.push(friend);
//   return obj.data.friends;
// }
// addMate(user, "Rabert")
// console.log(user.data.friends);

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}
console.log(addFriend(user, 'Pete'));

//////////////////////////////////////////

// function findLongestWordLength(str) {
//   let longest = 0;
//   let words = str.split(' ');
//   for (let i = words.length - 1; i >= 0; i--) {
//     if (words[i].length > longest) {
//       longest = words[i].length;
//     }
//   }
//   return longest;
// }

// function findLongestWordLength(str) {
//   let longest = 0;
//   let word = str.split(' ');
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longest) {
//       longest = word[i].length;
//     }
//   }
//   return longest;
// }

// function findLongestWordLength(str) {
//   let word = str.split(' ');
//   let longestWord = word.reduce(function (cur, longest) {
//     if (cur.length > longest.length) {
//       return cur.length;
//     } else {
//       return longest;
//     }
//   })
//   return longestWord.length;
// }

// console.log(findLongestWordLength("The quick brownpoipoi fox jumped over the lazy dog"));

///////////////////////////////////////////////

// function largestOfFour(arr) {
//   let highest = [0, 0, 0, 0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > highest[i]) {
//         highest[i] = arr[i][j];
//       }
//     }
//   }
//   console.log(highest);
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/////////////////////////////////////////

// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }

// console.log(confirmEnding("Congratulation", "on"));

//////////////////////////////////////////

// function repeatStringNumTimes(str, num) {
//   if (num < 0) {
//     return
//   } else {
//     let arr = Array(num).fill(str).join('')
//     return arr;
//   }
// }

// console.log(repeatStringNumTimes("abc", 3));

///////////////////////////////////////

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

///////////////////////////////////

function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

////////////////////////////////////

// Reverse String -
// For loops are outdated, try a for of loop.
// Remember with for each it does not produce a new array so an empty string will be needed.
// Reduce does produce a new array so the empty array can be added in place of the accumulator base 0. The empty strimg is the starting point.

function revStr(str) {
  // let emptyStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   emptyStr += str[i];
  // }
  // return emptyStr;

  // let emptyStr = '';
  // for (let i = 0; i < str.length; i++) {
  //   emptyStr = str[i] + emptyStr
  // }
  // return emptyStr;

  // let emptyStr = '';
  // for (let char of str) {
  //   emptyStr = char + emptyStr;
  // }
  // return emptyStr;

  // let emptyStr = '';
  // str.split('').forEach(char => emptyStr = char + emptyStr);
  // return emptyStr;

  return str.split('').reduce((revStr, char) => char + revStr, '');
}

console.log(revStr('rabert'));

//////////////////////////////////////////

// Reverse Integer

function reverseInt(int) {
  let convert = String(int).split('').reverse().join('');
  return parseInt(convert) * Math.sign(int);
}

console.log(reverseInt(-521));

//////////////////////////////////////////

// Caps first letter

function capsLetter(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

console.log(capsLetter('rabert is good'));

// const abbrevName = n => {
//   return n.split(' ').map(i => i[0]).join('.');
// }
// console.log(abbrevName('Evelin Kasemets'));

///////////////////////////////////

function longestWord(sen) {
  let arrSen = sen.toLowerCase().match(/[a-z0-9]+/g);
  let sorted = arrSen.sort((a, b) => b.length - a.length);
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  return longestWordArr.join(', ');
}

console.log(
  longestWord(
    'Lorem ipsum dolor sitpopopopopo, amet consectetur adipisicing elit. Amet libero'
  )
);

///////////////////////////////////

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}
console.log(titleCase("I'm a little tea pot"));

///////////////////////////////////

// Switch array values

function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice();
  console.log(arr2Copy.splice(n, 0, ...arr1));
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//////////////////////////

// Remove all Falsy

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, 'ate', '', false, 9]));

///////////////////////////

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(5));

//////////////////////////

function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
}
console.log(reverseString('freeCodeCamp'));

/////////////////////////////////////////

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => {
    a - b;
  });
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

/////////////////////////////////////////

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation(['hello', 'hey']));

////////////////////////////////////////

function chunkArrayInGroups(arr, size) {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + size));
    i += size;
  }
  return chunkedArr;
}
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// Set empty chunk arr
// Set i count to 0
// While i < arr length
// Push & Slice from i, i + size
// i += size

//////////////////////////////////////////////
function oddOrEven(arr) {
  const total = arr.reduce((acc, cur) => {
    return acc + cur;
  });

  console.log(total);
  if (total % 2 === 0) {
    console.log('Even');
  } else {
    console.log('odd');
  }
}

oddOrEven([13]);

////////////////////////////////////////////

function smallEnough(arr, limit) {
  return arr.every(n => n <= limit);
}

console.log(smallEnough([1, 23, 4, 56], 89));

/////////////////////////////////////////////

function largestPairSum(numbers) {
  const sorted = numbers.sort((a, b) => b - a);
  console.log(sorted[0] + sorted[1]);
}

largestPairSum([10, 14, 2, 23, 19]);

//////////////////////////////////////////////

function solve(arr) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';

  return arr.map(
    x =>
      x
        .toLowerCase()
        .split('')
        .filter((el, i) => i === alpha.indexOf(el)).length
  );
}
solve(['abc', 'def']);

////////////////////////////////////////////

function solution(str, ending) {
  return ending === str.substr(str.length - ending.length);
}

solution('abc', 'bc');

///////////////////////////////////////////////

function noOdds(values) {
  return values.filter(n => n % 2 === 0);
}

noOdds([0, 1, 2, 3]);

/////////////////////////////////////////////
