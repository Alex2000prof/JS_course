const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
function getCarHonda(carInventory) {
  const honda = carInventory.find(
    (car_search) => car_search.car_make === "Honda"
  );
  return honda.car_make;
}
console.log(getCarHonda(inventory));

function sortCarInventoryByYear(carInventory) {
  return carInventory.sort((first, next) => first.car_year - next.car_year);
}
console.log(sortCarInventoryByYear(inventory));
