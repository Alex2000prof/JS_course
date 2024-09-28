import React, { Component } from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import FavoriteColor from "./components/FavoriteColor";
import Child from "./components/Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  toggleChild = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <BuggyCounter />

        <FavoriteColor />

        {this.state.show ? <Child /> : null}
        <button onClick={this.toggleChild}>Delete</button>
      </div>
    );
  }
}

export default App;
