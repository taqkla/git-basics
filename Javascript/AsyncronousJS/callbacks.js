// callbacks - function passed as an argument inside another function is callback

// Example-1

function name(name, getAge) {
    console.log(`My name is ${name} and I am ${getAge()} years old.`);
}

const getAge = function () {
    return 23;
}

name("Prateek", getAge);
console.log('------------------------------------------');

// Example-2

const clothes = ['Pants', 'Jeans', 't-shirts', 'shirts', 'trousers', 'capries'];

clothes.forEach((cloth) => {
    console.log(cloth);
})
console.log('------------------------------------------');

// Example-3
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

console.log(posNumbers);

// Keep only positive numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}
console.log('------------------------------------------');


// Example-4 - EventListners
setTimeout(function () {
    console.log("Ye callback hai!");
}, 5000)

console.log('------------------------------------------');

// Example-5:
let count = 0;
document.getElementById('clickMe').addEventListener('click', cb);

function cb() {
    console.log(`button pressed ${++count} times`);
}

console.log('------------------------------------------');