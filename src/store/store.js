import {configureStore} from '@reduxjs/toolkit';
import cart from "../components/reducers/cartSlice.js";
import flowers from "../components/reducers/flowersSlice.js";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer : {flowers, cart},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware)
})
export default store

