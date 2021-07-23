import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import catalogBarReducer from "./catalogBarReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
  catalog: catalogReducer,
  catalogBar: catalogBarReducer,
  cart: cartReducer,
});

export default rootReducer;
