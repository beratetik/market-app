import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  GO_TO_PAGE, 
  MIGRATE_MANUFACTURERS} from '../constants/product.types'
import * as actions from '../actions/products.actions'

const initialState = {
  productList: [],
  filteredList: [],
  currentList: [],
  count: 0,
  totalPages: 0,
  currentPage: 0,
  perPage: 16,
  loading: false,
  itemTypes: [],
  tags: [],
  manufacturer: [],
  sort: "lowToHigh",
  filters: {
    itemTypes: [],
    tags: [0],
    manufacturer: [0]
  }
}

export const ACTION_HANDLERS = {
  [GET_PRODUCTS]: actions.getProductsHandler,
  [SORT_PRODUCTS]: actions.getSortProductsHandler,
  [FILTER_PRODUCTS]: actions.filterProductsHandler,
  [MIGRATE_MANUFACTURERS]: actions.migrateManufacturersHandler,
  [GO_TO_PAGE]: actions.goToPageHandler
}

const productReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default productReducer
