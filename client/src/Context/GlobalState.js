import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    coffees: [],
    coffee: {},
    pastries: [],
    pastry: {},
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
                type: 'ERROR',
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
                type: 'ERROR',
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
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getPastries() {
        try {
            const res = await axios.get('/api/v1/pastries');
            
            dispatch({
                type: 'GET_PASTRIES',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }
    
    async function getPastry(id) {
        try {
            const res = await axios.get(`/api/v1/pastries/${id}`);
    
            dispatch({
                type: 'GET_PASTRY',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }
    
    async function addPastry(pastry) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        try {
            const res = await axios.post('/api/v1/pastries', pastry, config);
            
            dispatch({
                type: 'ADD_PASTRY',
                paylaod: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
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
        addCoffee,
        getPastries,
        getPastry,
        addPastry
    }}>
        {children}
    </GlobalContext.Provider>)
}