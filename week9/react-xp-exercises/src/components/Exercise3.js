import React from "react";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a Styled Heading</h1>
        <p>This is a paragraph.</p>
        <a href="#">This is a link</a>
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </form>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
