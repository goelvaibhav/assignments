## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function findSum(a) {
  var sum = 0;
  for (var i = 0; i < a; i++) {
    sum += i;
  }
  return sum;
}

function findSum100() {
  console.log(findSum(100));
}

setTimeout(findSum100, 1000);

console.log("hello world");






































































(Hint: setTimeout)