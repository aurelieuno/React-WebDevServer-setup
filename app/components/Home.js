import React from "react";
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h2>Home</h2>
    <Link className="button" to="/battle">Battle</Link>

  </div>
)

module.exports = Home;

