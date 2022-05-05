import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home, Catalog, Cart, CustomerForm, Order, Contacts} from "./pages";
import {Header, Footer} from "./components";
import {BASE_URL, CART_URL, CATALOG_URL, CONTACTS_URL, FORM_URL, ORDER_URL} from "./utilities";

const App = () => (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path={BASE_URL} component={Home} exact />
        <Route path={CATALOG_URL} component={Catalog}  />
        <Route path={CONTACTS_URL} component={Contacts} />
        <Route path={CART_URL} component={Cart}  />
        <Route path={FORM_URL} component={CustomerForm}  />
        <Route path={ORDER_URL} component={Order}  />
      </Switch>
      <Footer />
    </React.Fragment>
);

export default App;
