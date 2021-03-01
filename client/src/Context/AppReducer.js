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
        case 'GET_ITEMS':
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case 'GET_ORDERS':
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case 'GET_ORDER':
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case 'ADD_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case 'GET_REPORTS':
            return {
                ...state,
                loading: false,
                reports: action.payload
            }
        case 'GET_REPORT':
            return {
                ...state,
                loading: false,
                report: action.payload
            }
        case 'ADD_REPORT':
            return {
                ...state,
                reports: [...state.reports, action.payload]
            }
        default:
            return state;
    }
}