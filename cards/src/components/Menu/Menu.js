import React from "react";
import { Route, Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Route>
            <Link to="/">Home</Link>
          </Route>
        </li>
        <li>
          <Route>
            <Link to="/new">New Card</Link>
          </Route>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
