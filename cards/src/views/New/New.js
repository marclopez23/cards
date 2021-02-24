import React, { useState } from "react";
import "./New.css";
const New = ({ func }) => {
  const initialState = {
    name: "",
    calories: 0,
    image: "",
  };
  const [value, setValue] = useState({ ...initialState });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    func(value);
  };
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={handleChange}
        />
        <label htmlFor="calories">Calories</label>
        <input
          type="text"
          name="calories"
          id="calories"
          value={value.calories}
          onChange={handleChange}
        />
        <label htmlFor="image">Foto</label>
        <input
          type="text"
          name="image"
          id="foto"
          value={value.image}
          onChange={handleChange}
        />
        <button type="submit">Add Food</button>
      </form>
    </section>
  );
};

export default New;
