import axios from 'axios'

export const LOGIN_INITIAL = 'demo/login/LOAD';
export const PAGE_SPINNER_LOADING = 'demo/login/PAGE_SPINNER_LOADING';
export const PAGE_SPINNER_LOADING_SUCCESS = 'demo/login/PAGE_SPINNER_LOADING_SUCCESS';
export const PAGE_SPINNER_LOADING_ERROR = 'demo/login/PAGE_SPINNER_LOADING_ERROR';

const initialState = {
  isPageLoading: false,
  error: null,
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_SPINNER_LOADING:
      return {
        ...state,
        isPageLoading: true,
      }
    case PAGE_SPINNER_LOADING_SUCCESS:
      return {
        ...state,
        isPageLoading: false,
        data: action.payload
      }
    case PAGE_SPINNER_LOADING_ERROR:
      return {
        ...state,
        isPageLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}


export const load = (url) => {
  return async (dispatch) => {
    dispatch({ type: PAGE_SPINNER_LOADING });
    try {
      const data = await axios.get(`${url}`)
      dispatch({ type: PAGE_SPINNER_LOADING_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: PAGE_SPINNER_LOADING_ERROR, payload: error })
    }
  }
}