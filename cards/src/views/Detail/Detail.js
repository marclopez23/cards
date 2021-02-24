import React, { useState, useEffect } from "react";
import { useParams, Route, Link } from "react-router-dom";
import "./Detail.css";

const Detail = ({ foods }) => {
  const { cardId } = useParams();
  const [card, setCard] = useState({});
  const setItem = () => {
    const food = foods.filter((food) => food.id === cardId);
    setCard(...food);
  };
  useEffect(() => setItem(), [cardId]);
  return (
    <main>
      <section>
        <img src={card.image} alt={card.name} />
        <h1>{card.name}</h1>
        <p>Calories: {card.calories}</p>
        <Route>
          <Link to="/">Go back</Link>
        </Route>
      </section>
    </main>
  );
};

export default Detail;
