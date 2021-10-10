import { globalCss } from "@stitches/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./fonts/pretendard/index.css";
import Home from './pages/Home';
import Shop from './pages/Shop';


const styleInitializer = globalCss({
  html: {
    fontSize: "4px",
  },
  body: {
    fontSize: "4rem",
    fontWeight: "300"
  },
  "*": {
    // fontFamily: "Pretendard",
  },
});

function App() {
  styleInitializer();
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
      </Switch>
    </Router>
  );
}

export default App;
