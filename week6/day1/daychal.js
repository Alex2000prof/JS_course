let customer = "John";

const marketList = {
  fruits: ["pear", "apple", "banana"],
  veggies: ["tomato", "cucumber", "lettuce"],
  price: "20$",
  details: {
    isPaid: true,
    paymentMethods: ["cash", "creditCard"],
  },
};

const showFruits = () => {
  marketList.fruits.forEach((fruit) => console.log(fruit));
};

const duplicateMarketList = () => {
  let user = customer;
  customer = "Betty";

  let basket = marketList;
  basket.price = "35$";
  basket.details.isPaid = false;
};

showFruits();
duplicateMarketList();
