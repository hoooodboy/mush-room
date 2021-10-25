import React from 'react';
import { globalCss } from "@stitches/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./fonts/pretendard/index.css";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import LookBook from './pages/LookBook';
import StockList from './pages/StockList';

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
        <Route path="/login" component={Login} exact />
        <Route path="/lookbook" component={LookBook} exact />
        <Route path="/stock-list" component={StockList} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
