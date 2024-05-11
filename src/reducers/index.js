const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    coolDown: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'COOLDOWN_ON':
            return {
                ...state,
                coolDown: true
            }
        case 'COOLDOWN_OFF':
            return {
                ...state,
                coolDown: false
            }
        default: return state
    }
}

export default reducer;