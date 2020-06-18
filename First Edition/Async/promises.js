var p = Promise.resolve(21);

p.then(function (v) {
  console.log(v); // 21

  // create a promise to return
  return new Promise(function (resolve, reject) {
    // introduce asynchrony!
    setTimeout(function () {
      // fulfill with value `42`
      resolve(v * 2);
    }, 100);
  });
}).then(function (v) {
  // runs after the 100ms delay in the previous step
  console.log(v); // 42
});
