import React from "react";

import Card from "../../components/Card/Card";

const Main = ({ foods }) => {
  return (
    <main>
      <section>
        {foods.map((food) => (
          <Card food={food} key={food.id} />
        ))}
      </section>
    </main>
  );
};

export default Main;
