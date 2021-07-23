import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Catalog, Cart, Form, Order } from "./pages";
import { Header, Footer } from "./components";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path={"/"} component={Home} exact />
                <Route path={"/catalog"} component={Catalog} exact />
                <Route path={"/cart"} component={Cart} exact />
                <Route path={"/form"} component={Form} exact />
                <Route path={"/order"} component={Order} exact />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default App;
