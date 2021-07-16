import { combineReducers } from "redux";

import CartReducer from './cart.reducer'
import ManufacturersReducer from './manufacturer.reducer'
import ProductsReducer from './products.reducer'

const reducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
  manufacturer: ManufacturersReducer
});

export default reducer;
