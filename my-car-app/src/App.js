import "./App.css";
import Car from "./Components/Car";
import Events from "./Components/Events";
import Color from "./Components/Color";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <Car carInfo={carInfo} />
      <Events />
      <Color />
    </div>
  );
}

export default App;
