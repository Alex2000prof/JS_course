//ex1
function displayNumbersDivisible(divisor) {
  let sum = 0;
  for (let num = 0; nim <= 500; num++) {
    if (num % divisor === 0) {
      sum += num;
      console.log(num);
    }
    console.log("sum", sum);
  }
}
displayNumbersDivisible(52);

//ex 2
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};
const shoppinglist = ["banana", "orange", "apple"];
function myBill() {
  let check = 0;
  for (let product of shoppinglist) {
    if (stock[product] > 0) {
      check += prices[product];
      stock[product]--;
    }
    return check;
  }
}

console.log("Total Bill:", myBill());
console.log("Updated Stock:", stock);

//ex3

function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;
  const totalChange =
    quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + pennies * 0.01;
  return totalChange >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));

//ex 4
function hotelCost() {
  let ask;
  do {
    ask = parseInt(prompt("How many nights do u wanna spend?: "));
  } while (isNaN(ask) === "" || ask <= 0);
  return ask * 140;
}
function planeRideCost() {
  let cities;
  do {
    cities = prompt("Choose citi: ");
  } while (!isNaN(cities) || cities === "");
  if (cities === "London") return "183$";
  if (cities === "Paris") return "183$";
}


function rentalCarCost() {
  let days;
  let price = 40;
  do {
    days = parseInt(prompt("how many days?: "))
  } while (isNaN(days) === "" || days <= 0);
  if (days > 10) {
    return ((days * price) - ((days * price) / 100 * 5))
  } else {
    return days * price;
  }
}
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    console.log('$${car},$${hotel},$${plane}')
    return hotel + plane + car;
}
console.log(totalVacationCost())