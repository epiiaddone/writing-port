import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/article/:slug" component={Article} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
