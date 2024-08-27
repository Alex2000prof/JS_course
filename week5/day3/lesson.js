function fntName() {
  //statements
}
function drinkCoffee(){
    console.log("The user drinks coffee in the morning");
}
function myFunc(param1,param2, paramN){
    //statement
}
function userInfo (username, userAge) {
    console.log("My name is " + username + ", my age is " + userAge);
}
function calculus () {
    console.log(1+2);
}

calculus(); //3
function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is "  + userAge);
}

userInfo("Sarah", 22); //My name is Sarah, my age is 22
userInfo("Ben", 40); //My name is Ben, my age is 40
function calculusSecond (a,b,c) {
    console.log(a+b+c);
}

calculusSecond(2,3,1);//6
function userInfo(userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Sarah");//My name is Sarah, my age is undefined
function userInfo(userName, userAge=20) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Sarah"); //My name is Sarah, my age is 20
userInfo("Ben", 40); //My name is Ben, my age is 40

function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes

// undefined in the global scope
console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined

//global variable 
let eyeColor = "blue";

function userMoreInfo (userName, userAge) {
    console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
}

userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes
console.log(eyeColor); // blue

function favoriteColor () {
    console.log("My favorite color is " + eyeColor);
}

favoriteColor(); //My favorite color is blue