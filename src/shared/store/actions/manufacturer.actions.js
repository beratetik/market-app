import axios from 'axios'

import * as manufacturerTypes from '../constants/manufacturer.types'

export const setLoading = () => ({
  type: manufacturerTypes.LOADING
});

// Action Creators
export const getManufacturers = () => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.get('http://localhost:3001/companies')

  dispatch({
    type: manufacturerTypes.GET_MANUFACTURERS,
    payload: response.data
  })
}

// Reducers
export const getManufacturersHandler = (state, { payload }) => ({
  ...state,
  list: [{ name: 'All', slug:"All"}, ...payload],
  loading: false
})

export const setLoadingHandler = (state) => ({
  ...state,
  loading: true
})
