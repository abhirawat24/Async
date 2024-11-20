console.log("hi there");

setTimeout(function(){
    console.log("from inside async fn 20 sec")
}, 20000);

setTimeout(function(){
    console.log("from inside async fn 10 sec")
}, 10000);

let a = 0; for (let i = 0; i<10; i++){
    a = a + 1;
}
console.log(a);
