// Variable and datatype


// console.log(sanjayName);
// var sanjayName = "Sanjay";
// sayHello();

// function sayHello() {
//     console.log("Hello! " + sanjayName);
// }

// console.log(sanjayName);

// Number | String | Boolean | null | undefined
// variable hoisting

// let num = 2;
// let name = "Sanjay";
// let isCorrect = true;
// let isPresent = null;
// let isDefined = undefined;

// let fruits = ["apple", "mango", "lichi"];
// let student = {
//     name: "Deepika",
//     rollNumber: 21,
//     rank: 1,
//     percentage: 92
// }

// console.log(num, name, isCorrect, isPresent, isDefined, fruits, student);

// console.log(student.name + " : " + typeof student);
// console.log(typeof fruits);
// console.log(typeof isPresent);
// console.log(typeof isDefined);
// console.log(typeof num);
// console.log(typeof name);
// console.log(typeof isCorrect);

// console.log("-----");
// student = "Prateek";
// console.log(typeof student);



// var num1 = "4";
// var num2 = "4";
// console.log(num1 + num2);

// console.log(num1 == num2); // check the value.
// console.log(num1 === num2); // check the value as well as type.


// let age = 20;
// let allowed = age >= 18 ? "Yes" : "No";

// if (age >= 18) {
//     allowed = "Yes";
// } else if (age >= 20) {
//     allowed = "sure"
// } else {
//     allowed = "No"
// }

// console.log(allowed);

// switch (age) {
//     case 18: console.log("Adult age!"); continue;
//     case 19: console.log("Adult age! + 1"); break;
//     default: console.log("Wrong age!");
// }


// let array = [11, 22, 33, 44, 5, 6, 7]
// counter = array.length;
// console.log(counter);
// while (counter > 0) {
//     counter--;
//     continue;
//     console.log("array element from last" + array[counter - 1]);

// }
// console.log("do do do!");
// do {
//     console.log("hello do while loop");
// } while (counter > 0);


// for (let index = 0; index < array.length; index++) {
//     // local scope
//     const element = array[index];
//     console.log(element);

// }

// // enhanced for loop
// array.forEach(element => {
//     console.log(element);
// });


// let student = {
//     name: "Deepika",
//     rollNumber: 21,
//     rank: 1,
//     percentage: 92
// }
// for (const key of array) {
//     console.log(key);
// }

// for (const key in student) {
//     const element = student[key];
//     console.log(key + " : " + element);
// }

// var num3 = num1 + num2 + num3;
// num3 += num1 + num2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num2 ** num1);



// Exception handling

// function writeToDb() {
//     throw console.error("Error came!");
// }

// function writeToCache() {
//     console.log("write to my cache!");
// }

// writeToDb();
// writeToCache();
// try {
//     writeToDb();
// } catch (error) {
//     console.log(error);
// } finally {
//     writeToCache();
// }


// function rateChart(name, value = 23) {
//     console.log(name + " " + value);
// }
// rateChart("samosachat", 32)

// Arrow function
// let fn = (name, value) => {
//     console.log(name + " " + value);
// }
// fn("Prateek", 32);


// var, const and let;

// function example() {
//     if (true) {
//         var varVariable = "I'm var!";
//         let letVariable = "I'm let!";
//     }
//     console.log(varVariable); // "I'm var!"
//     console.log(letVariable); // ReferenceError: letVariable is not defined
// }

// example();

// const obj = { name: "Prateek" };
// const proto = { prop: "value" };

// function name(params) {
//     console.log("My name is " + params);
// }

// Object.setPrototypeOf(obj, proto); // Set obj's prototype to proto

// console.log(obj.prop); // "value"
// console.log(name.Prototype);

// console.log(obj.hasOwnProperty("ProtoType"));

// name("Patrick");
// let a = 23;

// Arrow functions
// const name = (personName) => {
//     console.log("The name is " + personName);
//     // var a = 24;
//     // let a = 27;
//     console.log(a);
// }



// Function Declaration
// function name(personName) {
//     console.log("The name is " + personName);
//     // var a = 24;
//     // let a = 27;
//     console.log(a);
// }



// Function invocation
// name("Patrick");
// console.log(a);

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (arrValue) {
//     console.log(arrValue);
// })
// // Arrow function
// arr.forEach((arrValue) => console.log(arrValue));

// let cartId = 3;
// function createOrder(cartId) {
//     return 1;
// }
// // callback hell
// function updateCart((cartId) => {
//     // perform update operation on cartId;
//     console.log(cartId);
//     const orderId = createOrder(cartId);
//     processOrder(orderId);
//     processOrder((orderId) => {
//         returnOrder(); // API
//     })
//     processOrder(orderId);
// });


// function returnOrder() {
//     console.log("orderId");
// }

// function processOrder(orderId) {
//     console.log("the order is processing" + orderId);
// }


// updateCart(3);

// AJAX


// let a = 32;
// a = 35;
// const b = 31;
// b = 32;

// {
//     let a = 23;
//     console.log(a);
// }

// console.log(a);

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function printValue(arrValue) {
//     console.log(arrValue * 2);
// })


// function printValue(arrValue) {
//     console.log(arrValue);
// }


// let value = 32;

// function doSomething() {
//     value = 34;
// }

// // doSomething();

// doSomething(() => {
//     value = 34;
//     updateCart();
//     asygetOrder();
// })


// const str = "strinxdgdgjks";

// const Student = {
//     name: "Prateek",
//     rollNumber: "32"
// }

// Student.prototype.printStudent = () => {
//     console.log(name, rollNumber);
// }
// console.log(Student.printStudent());

// Student.IsHeadBoy = true;

// console.log(Student);

// function name() {
//     this.name = "Prateek";
//     console.log(this.name);
// }
// name();

// this.name = "Shashank";
// console.log(this.name);


// function doSomething() {
//     // anything here
//     console.log("This is a do something function!");
// }

// const doSomething = (() => {
//     console.log("This is a callback function");
// })

// doSomething();


// function performOperation(callback) {
//     callback();
//     console.log("This is an actual function");
// }



// function callbackFunction() {
//     // Code to be executed as a callback
//     for (let i = 0; i < 10; i++)
//         console.log("This is a callback function!");
// }

// performOperation(callbackFunction);



// let company = {

//     name: "A",

//     pay: function () {

//         console.log("Paying");

//     },

// }; //company object

// let worker = {

//     id: 1,

//     work: function () {

//         console.log("Working");

//     },

// }; //worker object

// worker.__proto__ = company; //worker object inherits company object

// console.log(worker);

// worker.pay(); // calling method from company object using worker object.



// function updateCart(callbackStore) {
//     // 
//     return callbackStore(database, value);
// }

// function callbackStore(database, value) {
//     const connection = database.connect();
//     connection.store(value);
// }


// console.log({
//     name: "Prateek",
//     rollNumber: 32
// });

// console.log(JSON.parse(JSON.stringify({
//     name: "Prateek",
//     rollNumber: 32
// })))


// Object in real world  - Bird

// function Bird(type, flyCallback) {
//     this.type = type;
//     this.flyCallback = flyCallback
// }


// Bird("Hen", () => {
//     console.log("This hen can not fly high!");
// })

// Blueprint of some characterstic and behaviour of Bird


// Encapsulation
// class Bird {
//     constructor(type, color) {
//         this.type = type;
//         this.color = color;
//     }
//     fly() {
//         console.log(`This ${this.type} can fly`);
//     }
// }

// // Inheritence 
// // Polymorphism
// class Ostrich extends Bird {
//     constructor(type, color) {
//         super(type, color);
//     }
//     fly() {
//         console.log(`This ${this.type} can't fly`);
//     }

//     fly(name) {
//         console.log(`This ${name} can't fly`);
//     }
// }



// // const hen = new Bird("Hen", "Red");
// const ostrich = new Ostrich("Ostrich", "Red");
// // hen.fly();
// ostrich.fly("hen");

// // OOP principles

// // Abstaction

// class Gpay {


//     pay(amount, sender, receiver) {
//         // logic 
//         deductAmount(amount, sender);
//         notifySender();
//         addAmount(amount, receiver);
//         notifyReciever();
//     }
// }


// function timout() {
//     for (var index = 0; index < 10; index++) {
//         setTimeout(() => {
//             console.log(index);
//         }, 1000);
//     }
// }

// timout();

// console.log("Print this data");



// // Amazon - SDE2


// setInterval(() => {¸
//     for (let index = 0; index < 5; index++) {
//         console.log(index);
//     }
// }, 2000);



// Callback Functions

// setTimeout(() => {
//     console.log("We will execute after timeout");
// }, 5000)
// function name(printClassName) {
//     printClassName("Javascript : Advanced!");
// };

// function printClassName(className) {
//     console.log(`The name of my class is ${className}`);
// }

// name(printClassName);


// Event Listener

// function addEventListener() {
//     let count = 0;
//     document.getElementById('clickMe').addEventListener('click', function buttonClick() {
//         console.log(`button got clicked ${++count} times`);
//     })
// }

// addEventListener();

// var const let

// 1. hoisting
// 2. strictness

// var a = 10;
// let b = 20;

// var a = 23;

const arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

arr.forEach(day => console.log(day));

