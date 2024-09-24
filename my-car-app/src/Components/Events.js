import React, { useState } from "react";

function Events() {
  const clickMe = () => {
    console.log("I was clicked");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(`You used Enter: ${e.target.value}`);
    }
  };
  const [isToggleOn, setIsToggleOn] = useState(true);
  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <input onKeyDown={handleKeyDown} />
      <button onClick={toggle}>{isToggleOn ? "on" : "off"}</button>
    </div>
  );
}
export default Events;
