// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise -- {{ username: 'Prateek', designation: 'Instructor' } }

const task = function (resolve, reject) {
    setTimeout(() => {
        console.log('First Async Task Completed');
        // getUserDataFromDB
        resolve({ username: 'Prateek', designation: 'Instructor' });
        // reject(new Error('Error Occured: Be attentive!'))
    }, 1000);
}
// creation of promise
const initialPromise = new Promise(task);

// consume promsise
initialPromise.then(function (user) {
    console.log(user);
    console.log("Promise is resolved!");
    return user.username;
})
    .then(function (username) {
        // username
        console.log(`My name is ${username}`);
    })
    .catch(function (error) {
        console.log("Promise is rejected with error" + error);
    }).finally(function () {
        console.log("Promise is either rejected or resolved");
    })

// // Promise 1
const promiseOne = new Promise((resolve, reject) => {
    // Do async tasks
    // Make network calls
    setTimeout(() => {
        console.log('Async Task Completed');
    }, 1000);
})

promiseOne.then(function () {
    console.log('====================================');
    console.log('Promise is executed');
    console.log('====================================');
})



const promiseTwo = new Promise((resolve, reject) => {
    // Do async tasks
    // Make network calls
    setTimeout(() => {
        console.log('====================================');
        console.log('Async Task Completed');
        console.log('====================================');
        resolve();
    }, 1000);
})

promiseTwo.then(function () {
    console.log('====================================');
    console.log('Promise is executed');
    console.log('====================================');
})


// // Promise-2

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async 2 task completed!');
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log('====================================');
//     console.log('Async 2 is resolved!');
//     console.log('====================================');
// })


// // Promise -3
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async 3 task completed');
//         resolve({ username: 'Prateek', designation: 'Instructor' })
//     }, 1000);
// })

// promiseThree.then(function (user) {
//     console.log('====================================');
//     console.log('Async 3 is resolved!');
//     console.log('====================================');
//     console.log(user);
// })


// Promise-4

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            console.log('Async 3 task completed');
            resolve({ username: 'Prateek', designation: 'Instructor' })
        } else {
            reject('ERROR: Code bursted!')
        }

    }, 1000);
})

// promiseFour.then(function (user) {
//     console.log('====================================');
//     console.log('Async 3 is resolved!');
//     console.log('====================================');
//     console.log(user);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log('Promise is either resolved or rejected!');
// })



// Promise 5 : Promise chaining

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async 5 task completed');
//         resolve({ username: 'Prateek', designation: 'Instructor' })
//     }, 1000);
// })
//     .then(function (user) {
//         console.log(user);
//         return user.username;
//     }).then((username) => {
//         console.log('username: ' + username);
//     })
//     .catch((error) => {
//         console.log('Arrey yaar, error to aaya hai')
//     })
//     .finally(() => {
//         console.log('promise is either resolved or rejected!');
//     })



// Example 6: Async await

// async function executePromiseFour() {
//     try {
//         console.log("Async await block");
//         const user = await promiseFour;
//         console.log(user.designation);
//     } catch (error) {
//         console.log(error);
//     }
// }

// executePromiseFour();



// // Promise 6 

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();
// fetch("https://developer.mozilla.org/en-US/")
//     .then(data => console.log(data))
//     .catch((error) => console.log("ye error hai" + error));

