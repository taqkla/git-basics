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

function writeToDb() {
    throw console.error("Error came!");
}

function writeToCache() {
    console.log("write to my cache!");
}

// writeToDb();
// writeToCache();
try {
    writeToDb();
} catch (error) {
    console.log(error);
} finally {
    writeToCache();
}


function rateChart(name, value = 23) {
    console.log(name + " " + value);
}
rateChart("samosachat", 32)