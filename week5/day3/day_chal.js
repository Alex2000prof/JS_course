const solar = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
  const sec = document.querySelector('.listPlanets');

solar.forEach(planet => {
 
  const planets = document.createElement('div');
  planets.classList.add('planet');
  planets.style.backgroundColor = planet.color;

  planets.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement('div');
    moonDiv.classList.add('moon');
    moonDiv.style.left = `${Math.random() * 100}px`;
    moonDiv.style.top = `${Math.random() * 100}px`;
    planets.appendChild(moonDiv);
  }

  sec.appendChild(planets);
});