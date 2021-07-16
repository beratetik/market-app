import axios from 'axios'

import * as productTypes from '../constants/product.types'
import { getTagsWithCount, getManufacturersWithCount, getTypes } from '../helpers'
import { SORT_TYPES } from '../helpers'

// Action Creators
export const getProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/products')
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

// Reducers
export const getProductsHandler = (state, { payload }) => {
  const productList = payload.sort(SORT_TYPES[state.sort])

  const paginatedProducts = {
    productList,
    filteredList: productList,
    currentList: productList.slice(0, state.perPage),
    count: payload.length,
    totalPage: Math.ceil(payload.length / state.perPage),
    itemTypes: getTypes(payload),
    tags:  getTagsWithCount(payload),
    manufacturer: getManufacturersWithCount(payload),
    currentPage: 1,
    // filters: {
    //   ...state.filters,
    //   itemTypes: Object.keys(getTypes(payload)).map(Number)
    // }
  }

  return {
    ...state,
    ...paginatedProducts,
    loading: false
  }
}

export const filterProductsHandler = (state, { payload }) => {
  const { filterType, slug } = payload
  const newState = {...state}
  let newFilteredList = state.productList

  if (slug === "All") {
    newState.filters[filterType] = [0]

    const startIndex = (state.currentPage - 1) * state.perPage
    return {
      ...newState,
      filteredList: state.productList,
      currentList: state.productList.slice(startIndex, startIndex + state.perPage)
    }
  }


  const selectedItemIndex = state[filterType].findIndex(item => item.slug === slug)
  const isAllSelected = filterType !== 'itemTypes' && state.filters[filterType].includes(0)
  const isSelectedItemExist = state.filters[filterType].includes(selectedItemIndex)

  if (selectedItemIndex > -1 && !isSelectedItemExist) {
    if (isAllSelected) {
      newState.filters[filterType] = state.filters[filterType].filter(item => item !== 0)
    }
    newState.filters[filterType].push(selectedItemIndex)
  } else {
    if (isSelectedItemExist) {
      if (state.filters[filterType].length === 1 && filterType !== 'itemTypes' ) {
        newState.filters[filterType] = [0]
      }
       else {
        newState.filters[filterType] = state.filters[filterType].filter(item => item !== selectedItemIndex)
      }
    }
  }
  newState.filters[filterType] = state.filters[filterType].filter(item => item !== slug)


  Object.entries(state.filters).forEach(([key, values]) => {
    if (!values.length) return
    
    const filteredSlugs = values.map(index => state[key][index].slug)
    newFilteredList = newFilteredList.filter(item => {
      if (filteredSlugs.includes('All')) return true
      const type = key === 'itemTypes' ? 'itemType' : key
      if (Array.isArray(item[type])) {
        return filteredSlugs.some(slug => item[type].includes(slug))
      }
      return filteredSlugs.includes(item[type])
    })
  })

  return {
    ...newState,
    filteredList: newFilteredList,
    currentList: newFilteredList.slice(0, state.perPage),
    currentPage: 1
  }
}

export const getSortProductsHandler = (state, { payload }) => {
  const filteredList = state.filteredList.sort(payload.sortFn)

  return {
    ...state,
    filteredList,
    currentList: filteredList.slice(0, state.perPage),
    sort: payload.type
  }
}

export const migrateManufacturersHandler = (state, { payload }) => {
  const manufacturersWithName = state.manufacturer.reduce((acc, curr, index) => {
    const foundManufacturer = payload.find(item => item.slug === curr.slug)
    acc[index].name = foundManufacturer.name
    return acc
  }, state.manufacturer)

  return {
    ...state,
    manufacturers: [...manufacturersWithName]
  }
}
export const goToPageHandler = (state, { payload }) => {
  console.log("goto page handler", state, payload)
  const paginatedProducts = {
    currentList: state.filteredList.slice(state.perPage * payload, (state.perPage * payload )+ state.perPage),
    currentPage: payload
  }

  console.log("goto", paginatedProducts)

  return {
    ...state,
    ...paginatedProducts,
    loading: false
  }
}
