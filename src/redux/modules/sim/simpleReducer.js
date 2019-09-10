export const LOAD   = 'my-app/widgets/LOAD';
export const CREATE = 'my-app/widgets/CREATE';
export const UPDATE = 'my-app/widgets/UPDATE';
export const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
  isLoading:false,
  isLoaded:false
}

export default (state = initialState, action) => {
  switch (action.type) {
   case LOAD:
    return {
      ...state,
      isLoaded: action.payload
    }
   default:
    return state
  }
 }

 export const simpleAction = () => {
  return dispatch => {
    dispatch({
      type: LOAD,
      payload: true,
    })
  }
}


