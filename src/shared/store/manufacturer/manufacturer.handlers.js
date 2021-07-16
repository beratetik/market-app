export const getManufacturersHandler = (state, { payload }) => ({
  ...state,
  list: [{ name: 'All', slug:"All" }, ...payload],
  loading: false
})

export const setLoadingHandler = (state) => ({
  ...state,
  loading: true
})
