import React from "react";
import { Switch, Route, Redirect } from "react-router";

import LocationSelector from "./sections/locationSelector/LocationSelector";
import Home from "./sections/list/Home";

import "./styles/elements.css";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/:location" component={Home} />
        <Route path="/" component={LocationSelector} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
