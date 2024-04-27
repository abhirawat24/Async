function myFirstTimeOut(duration) {
  let p = new promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
  return p;
}
myFirstTimeOut(1000).then(function () {
  console.log("log the thing");
});
