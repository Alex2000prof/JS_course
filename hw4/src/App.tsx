import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import UserCard from "./UserCard";
import DataFetcher from "./DataFetcher";

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Counter />
      <UserCard name="Bob" age={25} />
      <UserCard />
      <DataFetcher />
    </div>
  );
};

export default App;
