import React, { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      <div className="languages">
        {languages.map((language, index) => (
          <div key={index} className="language">
            <h2>{language.name}</h2>
            <p>Votes: {language.votes}</p>
            <button onClick={() => vote(index)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
