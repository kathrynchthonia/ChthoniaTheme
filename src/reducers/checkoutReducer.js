// checkoutReducer.js
const initialState = {
    order: null,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_ORDER_SUCCESS':
            return {
                ...state,
                order: action.payload,
                error: null
            };
        case 'CREATE_ORDER_ERROR':
            return {
                ...state,
                order: null,
                error: action.payload
            };
        default:
            return state;
    }
}