// // callbacks - function passed as an argument inside another function is callback

// // Example-1

// function name(name, getAge) {
//     console.log(`My name is ${name} and I am ${getAge()} years old.`);
// }

// const getAge = function () {
//     return 23;
// }

// name("Prateek", getAge);
// console.log('------------------------------------------');


// C++/ Java

// // Example-2

const clothes = ['Pants', 'Jeans', 't-shirts', 'shirts', 'trousers', 'capries'];

// clothes.forEach((cloth) => {
//     console.log(cloth);
// })

function printEachElement(callback) {
    for (let element of clothes) {
        callback(element);
    }
}

// function printElement(element) {
//     console.log(element);
// }

const printElement = (element) => {
    console.log(element);
}

// printEachElement(printElement);

// console.log('------------------------------------------');

// Example-3
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// console.log(posNumbers);

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


// // Example-4 - EventListners
// const abcd = () => console.log("Ye callback hai!");
// setTimeout(abcd, 200);

// console.log('------------------------------------------');

// // // Example-5:
// let count = 0;
// function abcde() {
//     console.log(`button pressed ${++count} times`);
// }
// document.getElementById('clickMe').addEventListener('click', abcde);



// console.log('------------------------------------------');

// Example-6: Callback Hell and Inversion of Control 

// 1: createOrderAPI
// 2: proceedToPaymentAPI
// 3: showOrderSummaryAPI
// 4: updateWalletAPI


// function createOrder(orderId, proceedToPayment) {
//     // createOrder - DB entry
//     proceedToPayment();
// }


// function proceedToPayment(paymentId, showOrderSummary) {
//     // create Payment
//     showOrderSummary();
// }

// function showOrderSummary(orderSummary, updateWallet) {

// }





// function declaration
// function createOrder(orderId, proceedToPayment) {
//     console.log(`order is created with ${orderId}`);
//     // function invocation
//     const returnValue = proceedToPayment(2, function (summaryId) {
//         console.log(`summary is created with ${summaryId}`);
//         // updatedWallet();
//     });
//     console.log(returnValue);
// }

// function callAllCallbacks() {
//     // function declaration
//     let proceedToPayment = function (paymentId, showOrderSummary) {
//         console.log(`payment is done with ${paymentId}`);
//         // throw Error('ERROR: Something went wrong');
//         showOrderSummary(3);
//         return 1;
//     }

//     // function invocation
//     createOrder(1, proceedToPayment);
// }

// callAllCallbacks();
// console.log('------------------------------------------');


// userId = 1;
// callback = function (user) {
//     console.log("User:", user);

//     fetchUserPosts(user.id, function (posts) {
//         console.log("Posts:", posts);

//         fetchPostComments(posts[0], function (comments) {
//             console.log("Comments:", comments);
//         });
//     });
// }
// const userData = { id: userId, name: "John" };
// user = userData


// Console
// 1
// { id: userId, name: "John" }

// userId = 1
// callback2 = function (posts) {
//         console.log("Posts:", posts);
//         fetchPostComments(posts[0], function (comments) {
//             console.log("Comments:", comments);
//         });
//     }
// const userPosts = { userId: userId, posts: ["Post1", "Post2", "Post3"] }

// posts = userPosts
// postId = post.posts[0]

function fetchUserData(userId, callback) {
    setTimeout(function () {
        console.log(userId);
        const userData = { id: userId, name: "John" };
        callback(userData);
    }, 1000);
}

function fetchUserPosts(userId, callback2) {
    console.log("I am done, Thanks for calling");
    //     const userPosts = { userId: userId, posts: ["Post1", "Post2", "Post3"] }
    //     callback2(userPosts);
    // }, 1000);
}

function fetchPostComments(postId, callback) {
    setTimeout(function () {
        const comments = { postId: postId, comments: ["Comment 1", "Comment 2", "Comment 3"] }
        callback(comments);
    }, 1000);
}



fetchUserData(1, function (user) {
    console.log("User:", user);

    fetchUserPosts(user.id, function (userPosts) {
        console.log("userPosts:", userPosts);

        for (let post of userPosts.posts) {
            fetchPostComments(post, function (comments) {
                console.log("Comments:", comments);
            });
        }
    });
});

// nested callbacks are called callback hell. 
// Debugging is difficult;
// Inversion of control