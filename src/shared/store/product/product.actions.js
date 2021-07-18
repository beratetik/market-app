import axios from 'axios'

import * as productTypes from './product.types'
import { SORT_TYPES } from '../../utils/helpers'

const { REACT_APP_API_URL } = process.env

// Action Creators
export const getProducts = () => async (dispatch) => {
  const response = await axios.get(`${REACT_APP_API_URL}/products`)
  dispatch({
    type: productTypes.GET_PRODUCTS,
    payload: response.data
  })
}

export const sortProducts = (type) => ({
  type: productTypes.SORT_PRODUCTS,
  payload: { sortFn: SORT_TYPES[type], type}
})

export const filterProducts = (filterType, slug) => ({
  type: productTypes.FILTER_PRODUCTS,
  payload: { filterType, slug }
})

export const migrateManufacturers = (manufacturers) => ({
  type: productTypes.MIGRATE_MANUFACTURERS,
  payload: manufacturers
})

export const goToPage = (pageNo) => ({
  type: productTypes.GO_TO_PAGE,
  payload: pageNo
})

export const setLoading = () => ({
  type: productTypes.LOADING
});
