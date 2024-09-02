// //func - review
// //hoisting
// const root = document.getElementById("root");
// console.log(root);

// let a = 6

// function sg() {
//     console.log("hello");
// }
// sg()

// function say() {
//     return "hello";
// }

// const hi = sayy()
// console.log(hi);

// say_hello = function() {
//     return "hi"
// };
// say_hello()

// const sum = (a,b) => {
//     return a + b;
// }

//array methods

let users = ["John", "Marry", "Dan", "Anne"];
// len = users.length;
// for (let i = 0; i < len; i++){
//     console.log(users[1]);
// };
// let indx = 0;
// while(indx < users.length){
//     console.log(users[indx])
//     indx++;
// };
let arr = [];
users.forEach((item) => {
  console.log(item);
  arr.push(item + "@gamil.com");
});
console.log(arr);
