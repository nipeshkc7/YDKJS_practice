// don't just do this:
foo(42).then(function (v) {
  console.log(v);
});

// instead, do this:
Promise.resolve(foo(42)).then(function (v) {
  console.log(v);
});
// This will make sure you are chaining off a promise
