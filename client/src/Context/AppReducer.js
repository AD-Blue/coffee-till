/* eslint-disable import/no-anonymous-default-export */
export default(state, action) => {
    switch(action.type) {
        case 'GET_COFFEES':
            return {
                ...state,
                loading: false,
                coffees: action.payload
            }
        case 'GET_COFFEE':
            return {
                ...state,
                loading: false,
                coffee: action.payload
            }
        case 'ADD_COFFEE':
            return {
                ...state,
                coffees: [...state.coffees, action.payload]
            }
        case 'GET_PASTRIES':
            return {
                ...state,
                loading: false,
                pastries: action.payload
            }
        case 'GET_PASTRY':
            return {
                ...state,
                loading: false,
                pastry: action.payload
            }
        case 'ADD_PASTRY':
            return {
                ...state,
                pastries: [...state.pastries, action.payload]
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}