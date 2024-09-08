const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/Leanne%20Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/Ervin%20Howell",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/Clementine%20Bauch",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/Patricia%20Lebsack",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/Chelsey%20Dietrich",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/Mrs.%20Dennis%20Schulist",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/Kurtis%20Weissnat",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/Nicholas%20Runolfsdottir%20V%22",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/Glenna%20Reichert",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/lementina%20DuBuque",
  },
];

// Функция для создания и отображения карточек роботов
function displayRobots(robotsToShow) {
  const robotsContainer = document.getElementById("robots");
  robotsContainer.innerHTML = ""; // Очистить контейнер перед отрисовкой

  robotsToShow.forEach((robot) => {
    const robotCard = document.createElement("div");
    robotCard.classList.add("robot-card");

    const robotImage = document.createElement("img");
    robotImage.src = robot.image;
    robotImage.classList.add("imgRobo");

    const robotName = document.createElement("p");
    robotName.textContent = robot.name;

    robotCard.appendChild(robotImage);
    robotCard.appendChild(robotName);

    robotsContainer.appendChild(robotCard);
  });
}

// Изначально отображаем всех роботов
displayRobots(robots);

// Фильтрация роботов по имени
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchQuery)
  );
  displayRobots(filteredRobots);
});
