// authReducer.js
const initialState = {
    isAuthenticated: false,
    user: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          isAuthenticated: !!Object.keys(action.payload).length, // If the user object is not empty, the user is authenticated
          user: action.payload
        };
      default:
        return state;
    }
  }