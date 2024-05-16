import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    coolDown: false
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
        heroesFetched: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: state => {state.heroesLoadingStatus = 'error'},
        coolDownOn: state => {state.coolDown = true},
        coolDownOff: state => {state.coolDown = false}
    }
});


export default heroesSlice.reducer;

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    coolDownOn,
    coolDownOff
} = heroesSlice.actions; 