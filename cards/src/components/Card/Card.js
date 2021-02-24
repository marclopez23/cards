import React from "react";
import "./Card.css";
import { Route, Link } from "react-router-dom";

const Card = ({ food }) => {
  return (
    <article>
      <div>
        <img src={food.image} alt={food.name} />
      </div>
      <div>
        <h3>{food.name}</h3>
        <p>{food.calories}</p>
        <Route>
          <Link to={`card/${food.id}`}>More info</Link>
        </Route>
      </div>
    </article>
  );
};

export default Card;
