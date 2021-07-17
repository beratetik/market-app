import axios from 'axios'

import * as manufacturerTypes from './manufacturer.types'

// Action Creators
export const getManufacturers = () => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.get('http://127.0.0.1:3001/companies')

  dispatch({
    type: manufacturerTypes.GET_MANUFACTURERS,
    payload: response.data
  })
}

export const setLoading = () => ({
  type: manufacturerTypes.LOADING
});
