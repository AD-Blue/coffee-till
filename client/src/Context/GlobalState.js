import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    coffees: [],
    coffee: {},
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getCoffees() {
        try {
            const res = await axios.get('/api/v1/coffees');

            dispatch({
                type: 'GET_COFFEES',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'COFFEE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getCoffee(id) {
        try {
            const res = await axios.get(`/api/v1/coffees/${id}`);

            dispatch({
                type: 'GET_COFFEE',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'COFFEE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addCoffee(coffee) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/coffees', coffee, config);
            
            dispatch({
                type: 'ADD_COFFEE',
                paylaod: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'COFFEE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value = {{
        coffees: state.coffees,
        coffee: state.coffee,
        error: state.error,
        loading: state.loading,
        getCoffees,
        getCoffee,
        addCoffee
    }}>
        {children}
    </GlobalContext.Provider>)
}