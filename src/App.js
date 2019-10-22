import React from "react";
import logo from "./logo.svg";
import "./style.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Article from "./pages/Article";
import Error from "./pages/Error";

import WhatIsBitcoin from "./pages/WhatIsBitcoin";

function App() {
  return (
    <div class="site-wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/services/" component={Services} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/Portfolio/" component={Portfolio} />
        <Route exact path="/WhatIsBitcoin/" component={WhatIsBitcoin} />
        <Route exact path="/article/:slug" component={Article} />
        <Route component={Error} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
