import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


/*var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
*/
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Form from "./Form";
import Form2 from "./Form2";
import Results from "./Results1";
import MongoResults from "./MongoResults";

const App = () => (
  <BrowserRouter>
    <div>
      <ul className = "nav">
        <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>
        <li><NavLink activeClassName='active' to="/battle">Battle</NavLink></li>
        <li><NavLink activeClassName='active' to="/popular">Popular</NavLink></li>
        <li><NavLink activeClassName='active' to="/form">Form</NavLink></li>
        <li><NavLink activeClassName='active' to="/form2">Form2</NavLink></li>
        <li><NavLink activeClassName='active' to="/mongoresults">MongoResults</NavLink></li>

      </ul>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/battle" component={Battle}/>
      <Route exact path="/popular" component={Popular}/>
      <Route path="/form" component={Form}/>
      <Route path="/form2" component={Form2}/>
      <Route path="/battle/results" component={Results}/>
      <Route path="/mongoresults" component={MongoResults}/>
      <Route render={() => (
        <h3>404-Not Found</h3>)}/>
      </Switch>
    </div>
    </BrowserRouter>
)

module.exports = App;//common JS
//export default App;