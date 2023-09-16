// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise -- { }


// Promise has 3 states
// 1. pending, fulfilled, rejected

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('First Async Task Completed');
//         // getUserDataFromDB
//         // resolve({ username: 'Prateek', designation: 'Instructor' });
//         // reject('Error Occured: Be attentive!')
//     }, 1000);
// })


// p.then(function (userData) {
//     console.log(userData);
// }).catch((error) => { console.log(error); })

// console.log("Prateek Shukla");

// const task = function (resolve, reject) {
//     setTimeout(() => {
//         console.log('First Async Task Completed');
//         // getUserDataFromDB
//         resolve({ username: 'Prateek', designation: 'Instructor' });
//         // reject('Error Occured: Be attentive!')
//     }, 1000);
// }
// // creation of promise
// const initialPromise = new Promise(task);

// // // Promise chaining
// initialPromise.then((user) => {
//     console.log(user);
//     return { username: user.username, designation: user.designation, posts: ["Post1", "Post2", "Post3"] };
// }).then((posts) => {
//     console.log(posts);
//     throw Error("Error occured!")
//     // return { posts: posts, comments: ["Comment1", "Comment2"] }
// }).then((comments) => {
//     // throw Error("Error occured!")
// }).catch((e) => {
//     console.log(e);
// })

// consume promsise
// initialPromise.then(function (user) {
//     console.log(user);
//     console.log("Promise is resolved!");
//     return user.username;
// })
//     .then(function (username) {
//         // username
//         console.log(`My name is ${username}`);
//     })
//     .catch(function (error) {
//         console.log("Promise is rejected with error" + error);
//     }).finally(function () {
//         console.log("Promise is either rejected or resolved");
//     })

// // Promise 1
// const promiseOne = new Promise((resolve, reject) => {
//     // Do async tasks
//     // Make network calls
//     setTimeout(() => {
//         console.log('Async Task Completed');
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log('====================================');
//     console.log('Promise is executed');
//     console.log('====================================');
// })



// const promiseTwo = new Promise((resolve, reject) => {
//     // Do async tasks
//     // Make network calls
//     setTimeout(() => {
//         console.log('====================================');
//         console.log('Async Task Completed');
//         console.log('====================================');
//         resolve();
//     }, 1000);
// })

// promiseTwo.then(function () {
//     console.log('====================================');
//     console.log('Promise is executed');
//     console.log('====================================');
// })


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

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             console.log('Async 3 task completed');
//             resolve({ username: 'Prateek', designation: 'Instructor' })
//         } else {
//             reject('ERROR: Code bursted!')
//         }

//     }, 1000);
// })



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



// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise resolved!")
//         resolve()
//         // reject("Error occured")
//     }, 2000);
// })
// async function name(params) {
//     try {
//         await pro1;
//         console.log("Prateek Shukla");
//     } catch (error) {
//         console.log(error);
//     }
// }

// name();

// console.log("Nivedita");
// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             console.log('Async 3 task completed');
//             resolve({ username: 'Prateek', designation: 'Instructor' })
//         } else {
//             reject('ERROR: Code bursted!')
//         }

//     }, 1000);
// })

// async function executePromiseFour() {
//     try {
//         console.log("Async await block");
//         const user = await promiseFour;
//         console.log(user.designation);
//         return user;
//     } catch (error) {
//         console.log(error);
//     }
// }

// // console.log(executePromiseFour());
// executePromiseFour().then((result) => {
//     console.log(result);
// })



// // Promise 6 

const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        // console.log(users);
        return function getData() {
            return { username: 'Prateek', designation: 'Instructor' }
        };
    } catch (error) {
        console.log(error);
    }
}


fetchUsers().then(data => { console.log(data()); });


// fetch("https://developer.mozilla.org/en-US/")
//     .then(data => console.log(data))
//     .catch((error) => console.log("ye error hai" + error));







// Promise.all([promiseFour, promiseOne, promiseTwo])
//     .then(() => {
//         console.log("All promises resolved");
//     })
//     .catch((error) => {
//         console.error("At least one promise rejected:", error);
//     });