import React from "react";
import { Switch, Route, Redirect } from "react-router";

import List from "./sections/list/List";
// import Create from "./sections/create/Create";

import "./styles/elements.css";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/list" component={List} />
        {/* <Route path="/create" component={Create} /> */}
        <Redirect to="/list" />
      </Switch>
    );
  }
}
