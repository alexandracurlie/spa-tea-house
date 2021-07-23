import { createStore } from "redux";
import rootReducer from "./reducers";

//window.__REDUX...blablabla is an extension for chrome devtools
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
