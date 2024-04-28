//async await
function myPromisifiedTimeOut() {
  return new Promise(function (onDone, onError) {
    onError();
  });
}
const p = myPromisifiedTimeOut();
FileSystem.readFile("a.txt", "utf-8", function (err, data) {});
p.then(function () {}).catch(function () {});
