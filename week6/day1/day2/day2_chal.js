const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
const names = [];
gameInfo.forEach((usr) => {
  names.push(usr.username + "!");
});

const above = [];
gameInfo.forEach((usr) => {
  if (usr.score > 5) {
    above.push(usr.username);
  }
});
let ball = 0;
gameInfo.forEach((usr) => {
    ball += usr.score;
});

