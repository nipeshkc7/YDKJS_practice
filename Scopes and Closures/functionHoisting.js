//  Function hoisting: 🚑 Function with formal declarations will be hoisted along with the initialization of the function 🙌🏻,
//  however if initialized with 'var' then variable will be hoisted but initialized to 'undefined' 😨!!

greeting();
// TypeError

var greeting = function greeting() {
    console.log("Hello!");
};