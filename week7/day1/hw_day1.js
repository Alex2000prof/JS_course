//1

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} <= 1=`);
    } else {
      reject(`${num} > 1`);
    }
  });
}

//2
const timer = new Promise((resolve) => {
  setTimeout(() => {
    resolve("sucess");
  }, 4000);
});
timer.then((result) => {
    console,log(result);
})

//3

Promise.resolve(3).then((value) => {
    console.log(value); 
  });
  Promise.reject('bu!').catch((error) => {
    console.log(error); 
  });