import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import cartReducer from "./cartReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  user: formReducer
});

export default rootReducer;
