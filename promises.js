// Promises are a better way to write functions with callbacks
//being one of the methods to make the code or asyncronus
// we use promises to do task while some task being on queue in APIs
function myFirstTimeOut(duration) {
  let p = new promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
  return p;
}
myFirstTimeOut(1000).then(function () {
  console.log("log the thing");
});
