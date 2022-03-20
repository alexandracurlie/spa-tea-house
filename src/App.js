import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Catalog, Cart, Form, Order } from "./pages";
import { Header, Footer } from "./components";

const App = () => (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path={"/spa-tea-house"} component={Home} exact />
        <Route path={"/spa-tea-house/catalog"} component={Catalog} exact />
        <Route path={"/spa-tea-house/cart"} component={Cart} exact />
        <Route path={"/spa-tea-house/form"} component={Form} exact />
        <Route path={"/spa-tea-house/order"} component={Order} exact />
      </Switch>
      <Footer />
    </React.Fragment>
);

export default App;
