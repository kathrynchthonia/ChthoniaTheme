// CartReducer.js
const initialState = {
    items: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.product]
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.productId)
        };
      default:
        return state;
    }
  }