function toggle(...args) {
  var currentIndex = 0;
  return function toggleArguments() {
    let valueToReturn = args[currentIndex % args.length];
    // The modulo operation loops through the total number of arguments
    // Example, if the length of arguments were 3 then values would
    // circulate as 0,1,2,0,1,2,
    currentIndex++;
    return valueToReturn;
  };
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"

console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
