import logo from "./logo.svg";
import "./App.css";

//ex 1

// function App() {
//   {
//     const myelement = <h1>I Love JSX!</h1>;
//     const sum = 5 + 5;

//     return (
//       <div>
//         <p>Hello World!</p>
//         {myelement}
//         <p>React is {sum} times better with JSX</p>
//       </div>
//     );
//   }
// }

// export default App;

//ex 2

// import UserFavoriteAnimals from "./components/UserFavoriteAnimals";

// function App() {
//   const user = {
//     firstName: "Bob",
//     lastName: "Dylan",
//     favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
//   };

//   return (
//     <div>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteAnimals animals={user.favAnimals} />
//     </div>
//   );
// }

// export default App;

//ex 3

import Exercise from "./components/Exercise3";

function App() {
  return (
    <div>
      <Exercise />
    </div>
  );
}

export default App;

