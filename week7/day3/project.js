const loadButton = document.getElementById("loadCharacter");
const loadingElement = document.getElementById("loading");
const characterInfo = document.getElementById("characterInfo");
const errorElement = document.getElementById("error");
const nameElement = document.getElementById("name");
const heightElement = document.getElementById("height");
const genderElement = document.getElementById("gender");
const birthYearElement = document.getElementById("birthYear");
const homeworldElement = document.getElementById("homeworld");
async function fetchCharacter() {
    
  try {
    loadingElement.style.display = "block";
    characterInfo.style.display = "none";
    errorElement.style.display = "none";

    const randomId = Math.floor(Math.random() * 83) + 1;
    const response = await fetch(
      `https://www.swapi.tech/api/people/${randomId}`
    );

    if (!response.ok) {
      throw new Error("Error fetching character");
    }
    const data = await response.json();
    const character = data.result.properties;

    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();

    nameElement.textContent = character.name;
    heightElement.textContent = character.height;
    genderElement.textContent = character.gender;
    birthYearElement.textContent = character.birth_year;
    homeworldElement.textContent = homeworldData.result.properties.name;

    characterInfo.style.display = "block";
  } catch (error) {
    errorElement.style.display = "block";
  } finally {
    loadingElement.style.display = "none";
  }
}

loadButton.addEventListener("click", fetchCharacter);










