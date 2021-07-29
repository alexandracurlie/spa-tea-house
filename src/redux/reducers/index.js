import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import catalogBarReducer from "./catalogBarReducer";
import cartReducer from "./cartReducer";
import inputReducer from "./inputReducer";


const rootReducer = combineReducers({
  catalog: catalogReducer,
  catalogBar: catalogBarReducer,
  cart: cartReducer,
  user: inputReducer
});

export default rootReducer;
