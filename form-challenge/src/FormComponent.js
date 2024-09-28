import React from "react";
import "./App.css"; // Подключаем CSS

function FormComponent(props) {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />

        <select
          name="destination"
          value={props.data.destination}
          onChange={props.handleChange}
        >
          <option value="">-- Choose Destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="Norway">Norway</option>
        </select>
        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.data.isLactoseFree}
            onChange={props.handleChange}
          />{" "}
          Lactose Free
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={props.data.isVegan}
            onChange={props.handleChange}
          />{" "}
          Vegan
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isGlutenFree"
            checked={props.data.isGlutenFree}
            onChange={props.handleChange}
          />{" "}
          Gluten Free
        </label>
        <br />

        <button>Submit</button>

        <h2>Entered Information:</h2>
        <p>
          Your name: {props.data.firstName} {props.data.lastName}
        </p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
        <p>Gluten Free: {props.data.isGlutenFree ? "Yes" : "No"}</p>
      </form>
    </div>
  );
}

export default FormComponent;
