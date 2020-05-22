/* These 3 examples below prove that JS parses/compiles the program prior to execution */


/*****************************************************************************************************/

// 1. Syntax Errors

var greeting = "Hello";

console.log(greeting);

greeting = ."Hi"; // SyntaxError: unexpected token .

/*****************************************************************************************************/

// Early Errors

console.log("Howdy");

saySomething("Hello","Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting,greeting) {
    "use strict";
    console.log(greeting);
}

// use strict prevents duplicate parameter names
// console.log not executed due to early parsing of the program

/*****************************************************************************************************/


// Hoisting

function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        let greeting = "Hi";
        console.log(greeting);
    }
}

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization

//Caused by something called TDZ (Temporal Dead Zone,), 'greeting variable is accessed too early'


/*****************************************************************************************************/