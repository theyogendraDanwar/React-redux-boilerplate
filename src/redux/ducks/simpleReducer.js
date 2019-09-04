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
     result: action.payload
    }
   default:
    return state
  }
 }


 export const simpleAction = () => {
   return dispatch => {
     console.log('hello')
   }
 }