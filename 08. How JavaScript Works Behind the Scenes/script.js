'use strict';

///////////////////////////////////////
// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
// Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

// Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
// console.log(str);
//     console.log(millenial);
// console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age);
// printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example 1
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// Example 2
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// Example 3
// console.log(this); // window

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };
// calcAge(1991);

// Example 4
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // window
// };
// calcAgeArrow(1980);

// Example 5
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // jonas / matilda / undefined
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge(); // this = jonas

// Example 6
// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // this = matilda

// Example 7
// const f = jonas.calcAge;
// f(); // this = undefined

// Example 8 (IT'S A GLOBAL SCOPE!)
// var firstName = 'Matilda'; // Window.firstName

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// arrow function
//   greet: () => {
//     console.log(this); // Window
//     console.log(`Hey ${this.firstName}`); // Matilda (Window.firstName)
//   },
// function expression
//   greet2: function () {
//     console.log(this); // jonas
//     console.log(`Hey ${this.firstName}`); // Jonas (jonas.firstName)
//   },
// };

// jonas.greet(); // Hey undefined (no firstName in Window object)
// jonas.greet(); // Hey Matilda
// jonas.greet2(); // Hey Jonas

// Example 9
// var firstName = 'Matilda'; // Window.firstName

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this); // undefined
//       console.log(this.year >= 1981 && this.year <= 1996); // TypeError: Cannot read property 'year' of undefined
//     };
//     isMillenial(); // undefined (regular function call)

// Solution 1 (pre-ES6)
//     const self = this; // this = jonas ('self' or 'that')
//     const isMillenial = function () {
//       console.log(self); // jonas
//       console.log(self.year >= 1981 && self.year <= 1996); // true
//     };

// Solution 2 (ES6)
//     const isMillenial = () => {
//       console.log(this); // jonas (parent scope)
//       console.log(this.year >= 1981 && this.year <= 1996); // true
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this); // Window
//     console.log(`Hey ${this.firstName}`); // Matilda (Window.firstName)
//   },
// };

// jonas.greet(); // Hey Matilda
// jonas.calcAge();

// Example 10 (Arguments keyword)
// function expression
// const addExpr = function (a, b) {
//   console.log(arguments); // Arguments(2) / Arguments(4)
//   return a + b;
// };
// addExpr(2, 4);
// addExpr(2, 5, 8, 12);

// arrow function
// var addArrow = (a, b) => {
//   console.log(arguments); // arguments is not defined
//   return a + b;
// };
// addArrow(2, 5, 8);

// Primitives vs. Objects (Primitive vs. Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Me', me); // 27
console.log('Friend', friend); // 27
