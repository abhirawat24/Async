function promisifiedTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}
promisifiedTimeout(1000).then(function () {
  console.log("first is done");
  promisifiedTimeout(2000).then(function () {
    console.log("second is done");
  });
});
