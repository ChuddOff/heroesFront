import { configureStore } from '@reduxjs/toolkit';
import filters from '../reducers/filtersSlice';
import heroes from '../reducers/heroesSlice';

const store = configureStore({
    reducer: {
        filters, heroes
    },
    devTools: true
})

export default store;