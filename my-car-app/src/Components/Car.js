import React, { useState } from "react";
import Garage from "./Garage";
import Events from "./Events";
import Phone from "./Phone";

function Car({ carInfo }) {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>
        This car is {color} {carInfo.model}
        <Garage size="small" />
        <Events />
        <Phone />
      </h2>
    </div>
  );
}

export default Car;
