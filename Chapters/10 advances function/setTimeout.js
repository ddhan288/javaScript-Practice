let alarm = function () {
  console.log("wake up");
};
setTimeout(alarm, 5000);
console.log("alarm set");

setTimeout(() => console.log("kuch bhi"), 2000);
