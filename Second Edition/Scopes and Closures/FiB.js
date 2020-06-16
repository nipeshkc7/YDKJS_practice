// Functions declarations in scopes

// The behaviour of this snippet depends entirely on the JS environment
if (false) {
    function ask() {
        console.log("Does this run?");
    }
}
ask();

// JS specs say: should throw Reference error, because function is block-scoped
// V8 engine: says TYPE error as ask is undefined, as in has been hoisted and initialized to undefined