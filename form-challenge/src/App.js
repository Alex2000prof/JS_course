import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isLactoseFree: false,
      isVegan: false,
      isGlutenFree: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const queryString = new URLSearchParams(this.state).toString();
    window.location.href = `http://localhost:3000/?${queryString}`;
  };

  render() {
    return (
      <div>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
