import { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    coffees: [],
    coffee: {},
    pastries: [],
    pastry: {},
    items: [],
    item: {},
    orders: [],
    order: {},
    reports: [],
    report: {},
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

const api = 'https://coffee-till-backend.herokuapp.com'

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [selection, setSelection] = useState('coffees');

    async function getCoffees() {
        console.log('link: ' + api + '/api/v1/coffees')
        try {
            const res = await axios.get(api + '/api/v1/coffees');
            
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
            const res = await axios.get(`${api}/api/v1/coffees/${id}`);

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
            const res = await axios.post(api + '/api/v1/coffees', coffee, config);
            
            dispatch({
                type: 'ADD_COFFEE',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getItems() {
        try {
            const res = await axios.get(api + '/api/v1/saleItems');

            dispatch({
                type: 'GET_ITEMS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addItem(item) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post(api + '/api/v1/saleItems', item, config);
            console.log('attempting to add item...')
            dispatch({
                type: 'ADD_ITEM',
                payload: res.data.data
            })
            console.log('item added successfully')
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function removeItem(id) {
        try {
            await axios.delete(`${api}/api/v1/saleItems/${id}`);

            dispatch({
                type: 'REMOVE_ITEM',
                payload: id
            })
        }
        catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getPastries() {
        try {
            const res = await axios.get(api + '/api/v1/pastries');
            
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
            const res = await axios.get(`${api}/api/v1/pastries/${id}`);
    
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
            const res = await axios.post(api + '/api/v1/pastries', pastry, config);
            
            dispatch({
                type: 'ADD_PASTRY',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getOrders() {
        try {
            const res = await axios.get(api + '/api/v1/orders');

            dispatch({
                type: 'GET_ORDERS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getOrder(id) {
        try {
            const res = await axios.get(`${api}/api/v1/orders/${id}`);

            dispatch({
                type: 'GET_ORDER',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addOrder(order) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post(api + '/api/v1/orders', order, config);
            
            dispatch({
                type: 'ADD_ORDER',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function removeOrder(id) {
        try {
            await axios.delete(`${api}/api/v1/orders/${id}`);

            dispatch({
                type: 'REMOVE_ORDER',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getReports() {
        try {
            const res = await axios.get(api + '/api/v1/reports');

            dispatch({
                type: 'GET_REPORTS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getReport(id) {
        try {
            const res = await axios.get(`${api}/api/v1/reports/${id}`);

            dispatch({
                type: 'GET_REPORT',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addReport(report) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post(api + '/api/v1/reports', report, config);
            
            dispatch({
                type: 'ADD_ORDER',
                payload: res.data.data
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
        pastries: state.pastries,
        pastry: state.pastry,
        items: state.items,
        item: state.item,
        orders: state.orders,
        order: state.order,
        reports: state.reports,
        report: state.report,
        error: state.error,
        loading: state.loading,
        getCoffees,
        getCoffee,
        addCoffee,
        getPastries,
        getPastry,
        addPastry,
        selection,
        setSelection,
        getItems,
        addItem,
        removeItem,
        getOrders,
        getOrder,
        addOrder,
        removeOrder,
        getReports,
        getReport,
        addReport
    }}>
        {children}
    </GlobalContext.Provider>)
}