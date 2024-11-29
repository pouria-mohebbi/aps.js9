
console.log("wait 5 sec");


setTimeout(() => {
  console.log("ready?");
  

  const intervalId = setInterval(() => {
    console.log("🚀");
  }, 1000);
  

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }, 10000);
}, 5000);
