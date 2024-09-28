import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("Child component will be unmounted");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Child;
