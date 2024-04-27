let a = 1;
console.log(a);
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

let and = 0;
for (let i = 0; i < 100; i++) {
  ans = ans + i;
}
console.log(ans);
