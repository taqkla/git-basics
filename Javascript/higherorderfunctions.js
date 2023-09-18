function higherOrder(callback) {
    // Perform some operations
    console.log("Executing higherOrder function...");
    // Invoke the callback function
    callback();
}

// Callback function passed to higher-order function
function callbackFunction() {
    console.log("Callback function executed!");
}

higherOrder(callbackFunction);




const arr = ["Prateek", "Suhas", "Deepika", "Deepak", "Dheerendra"];
// arr.forEach((name) => {
//     printHello(name)
// })


const updatedNameForEach = [];
arr.forEach(name => {
    updatedNameForEach.push(name + "surname");
})
const updatedName = arr.map((name) => {
    name = name + " Singhania";
    return name;
})

const dArray = arr.filter(name => { return name[0] == 'D' });

const numArray = [1, 4, 13, 2, 5];

let max = 0;
numArray.forEach(num => max = Math.max(max, num));
console.log(max);

const mxReduce = numArray.reduce((mx, cur) => { return Math.max(mx, cur) }, 0);
console.log(mxReduce);

const users = [
    { name: "Prateek", age: 21, designation: "Student" },
    { name: "Hritik", age: 19, designation: "Student" },
    { name: "Deepika", age: 21, designation: "Student" },
    { name: "Soumyodeep", age: 31, designation: "Student" },
    { name: "Aman", age: 31, designation: "Student" },
]

// {21: 2, 19: 1, 31: 2}

const ageFrequecyMap = users.reduce((acc, cur) => {
    if (acc[cur.age]) {
        acc[cur.age]++;
    } else {
        acc[cur.age] = 1;
    }
    return acc;
}, {})

console.log(ageFrequecyMap);

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function (accumulator, number) {
//     return accumulator + number;
// }, 0);

// console.log(sum);

// console.log(updatedName);
// console.log(dArray);



// function printHello(name) {
//     console.log("hello ", name);
// }
