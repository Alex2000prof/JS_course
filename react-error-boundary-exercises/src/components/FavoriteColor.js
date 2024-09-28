import React, { Component } from "react";

class FavoriteColor extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  shouldComponentUpdate() {
    console.log("In shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "In getSnapshotBeforeUpdate, previous color was",
      prevState.favoriteColor
    );
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Component updated from",
      prevState.favoriteColor,
      "to",
      this.state.favoriteColor
    );
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default FavoriteColor;
