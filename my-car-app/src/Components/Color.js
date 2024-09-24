import React, { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("красный");

  useEffect(() => {
    alert("useEffect reach");
  }, []);

  const changeColor = () => {
    setFavoriteColor("синий");
  };

  return (
    <div>
      <h2>My fav color: {favoriteColor}</h2>
      <button onClick={changeColor}>change color</button>
    </div>
  );
}

export default Color;
