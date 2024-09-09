//1
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string") {
        return reject("Error: Not all elements are strings");
      }
    }
    const upper = arr.map((word) => word.toUpperCase());
    resolve(upper);
  });
}
//1.1

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length < 4) {
      return reject("Error");
    }
    const sorted = arr.sort();
    resolve(sorted);
  });
}


  