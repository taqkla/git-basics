// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function

// A closure is a function that has access to the variables in the scope in which it was declared, even after the scope has been closed.This means that closures can be used to create private variables, which are only accessible to the closure and its inner functions.Closures are also useful for creating callbacks, which are functions that are passed as arguments to other functions and are called later.
var a = 7;

const y = function () {

    return function () {
        console.log("This code executed " + a);
    }
}
const innerFunction = y();
a = 10;
innerFunction();
