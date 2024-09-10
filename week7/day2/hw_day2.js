//1

const fetch_gif = async () => {
  const url =
    "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data", data);
  } catch (err) {
    console.log("Error: ", err);
  }
};

fetch_gif();

//2

const fetchSunGifs = async () => {
  const url =
    "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data", data);
  } catch (err) {
    console.log("Error: ", err);
  }
};
fetchSunGifs();

//3
const star = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error("http error");
    }
    const data = await response.json();
    console.log(data.result);
  } catch (err) {
    console.log("Error: ", err);
  }
};
fetchStarshipData();

// fetch("https://www.swapi.tech/api/starships/9/")
//   .then((response) => response.json())
//   .then((objectStarWars) => console.log(objectStarWars.result));

//4

//calling
//resolved after 2 sec
