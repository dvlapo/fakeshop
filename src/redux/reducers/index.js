import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./selectedProductReducer";

const reducers = combineReducers({
   allProducts: productReducer,
   product: selectedProductReducer,
})

export default reducers