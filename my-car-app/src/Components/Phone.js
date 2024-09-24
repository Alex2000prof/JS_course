import React, { useState } from "react";

function Phone() {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>ma phone</h2>
      <p>brand: {brand}</p>
      <p>model: {model}</p>
      <p>color: {color}</p>
      <p>year: {year}</p>

      <button onClick={changeColor}>Сменить цвет</button>
    </div>
  );
}

export default Phone;
