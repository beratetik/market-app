import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  GO_TO_PAGE, 
  MIGRATE_MANUFACTURERS} from './product.types'
import * as handler from './product.handlers'

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
  [GET_PRODUCTS]: handler.getProductsHandler,
  [SORT_PRODUCTS]: handler.getSortProductsHandler,
  [FILTER_PRODUCTS]: handler.filterProductsHandler,
  [MIGRATE_MANUFACTURERS]: handler.migrateManufacturersHandler,
  [GO_TO_PAGE]: handler.goToPageHandler
}

const productReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default productReducer
