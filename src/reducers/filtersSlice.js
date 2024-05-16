import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentFilter: "all",
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterAll: state => {state.currentFilter = 'all'},
        setFilterFire: state => {state.currentFilter = 'fire'},
        setFilterWater: state => {state.currentFilter = 'water'},
        setFilterWind: state => {state.currentFilter = "wind"},
        setFilterEarth: state => {state.currentFilter = 'earth'}
    }
});


export default filtersSlice.reducer;

export const {
    setFilterAll,
    setFilterFire,
    setFilterWater,
    setFilterWind,
    setFilterEarth
} = filtersSlice.actions;