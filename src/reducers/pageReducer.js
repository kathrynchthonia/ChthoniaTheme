// reducers/pageReducer.js
const initialState = {
    pages: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_PAGE':
        return {
          ...state,
          pages: {
            ...state.pages,
            [action.payload.id]: action.payload
          }
        };
      default:
        return state;
    }
  }