import React from "react";
import { globalCss } from "@stitches/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./fonts/pretendard/index.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import LookBook from "./pages/LookBook";
import StockList from "./pages/StockList";
import CreateAccount from "./pages/CreateAccount";
import ProductDetail from "./pages/ProductDetail";
import ScrollTop from "./components/PageTop";
// import { ProductProvider } from "./ProductContext";
import AppStateProvider from "./providers/AppStateProvider";

const styleInitializer = globalCss({
  html: {
    fontSize: "4px",
  },
  body: {
    fontSize: "4rem",
    fontWeight: "300",
  },
  "*": {
    // fontFamily: "Pretendard",
  },
});

function App() {
  styleInitializer();
  return (
    // <ProductProvider>
    <AppStateProvider>
      <Router>
        <ScrollTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
          <Route path="/lookbook" component={LookBook} />
          <Route path="/stock-list" component={StockList} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/product" component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppStateProvider>
    // </ProductProvider>
  );
}

export default App;
