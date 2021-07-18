import axios from 'axios'

import * as manufacturerTypes from './manufacturer.types'

const { REACT_APP_API_URL } = process.env
// Action Creators
export const getManufacturers = () => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.get(`${REACT_APP_API_URL}/companies`)

  dispatch({
    type: manufacturerTypes.GET_MANUFACTURERS,
    payload: response.data
  })
}

export const setLoading = () => ({
  type: manufacturerTypes.LOADING
});
