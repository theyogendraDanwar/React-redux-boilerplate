export const LOGIN_INITIAL = 'demo/login/LOAD';

const initialState = {
  isLoggedIn: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INITIAL:
      return {
        ...state,
        isLoggedIn: true,
      }
    default:
      return state
  }
}


export const load =() => {
  return dispatch => {
    dispatch({type: LOGIN_INITIAL})
  }
}