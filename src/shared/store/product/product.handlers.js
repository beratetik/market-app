import {
  getTagsWithCount,
  getManufacturersWithCount,
  getTypes,
  SORT_TYPES
} from '../../utils/helpers'

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
      currentPage: 1
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
      currentPage: 1,
      totalPage: Math.ceil(newFilteredList.length / state.perPage)
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
    const paginatedProducts = {
      currentList: state.filteredList.slice(state.perPage * (payload -1), (state.perPage * payload )),
      currentPage: payload
    }
    
    return {
      ...state,
      ...paginatedProducts,
      loading: false
    }
  }
  
  export const setLoadingHandler = (state) => ({
    ...state,
    loading: true
  })
  