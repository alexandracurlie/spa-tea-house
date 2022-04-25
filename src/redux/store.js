import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const DEVTOOLS_EXT = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const MIDDLEWARE = applyMiddleware(thunk)

const composedEnhancers = compose(MIDDLEWARE, DEVTOOLS_EXT)

const store = createStore(rootReducer, composedEnhancers);

export default store;
