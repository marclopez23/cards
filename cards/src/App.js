import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Main from "./views/Main/Main";
import Detail from "./views/Detail/Detail";
import Menu from "./components/Menu/Menu";
import New from "./views/New/New";
import foodList from "./foods.json";

function App() {
  const [foods, setFood] = useState([...foodList]);

  const submitFood = (value) => {
    console.log(value);
    const id = foods.length;
    value = { ...value, id: id };
    setFood((state) => [...state, value]);
  };

  return (
    <main>
      <Router>
        <Menu />
        <Route exact path="/">
          <Main foods={foods} />
        </Route>
        <Route exact path="/new">
          <New func={submitFood} foods={foods} />
        </Route>
        <Route exact path="/card/:cardId">
          <Detail foods={foods} />
        </Route>
      </Router>
    </main>
  );
}

export default App;
