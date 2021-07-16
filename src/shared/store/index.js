import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";

import { CartReducer } from './cart'
import { ManufacturerReducer } from './manufacturer'
import { ProductReducer } from './product'

const reducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  manufacturer: ManufacturerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
 