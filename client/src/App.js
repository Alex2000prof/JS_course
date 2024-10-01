import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    message: "",
    inputValue: "",
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/api/hello");
    const message = await response.text();
    this.setState({ message });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: this.state.inputValue }),
    });
    const message = await response.text();
    this.setState({ message });
  };

  render() {
    return (
      <div className="app-container">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something..."
            required
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default App;
