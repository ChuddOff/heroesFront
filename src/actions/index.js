export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const coolDownOn = () => {
    return {
        type: 'COOLDOWN_ON'
    }
}

export const coolDownOff = () => {
    return {
        type: 'COOLDOWN_OFF'
    }
}
export const setFilterAll = () => {
    return {
        type: 'SET_FILTER_ALL'
    }
}
export const setFilterFire = () => {
    return {
        type: 'SET_FILTER_FIRE'
    }
}
export const setFilterWater = () => {
    return {
        type: 'SET_FILTER_WATER'
    }
}
export const setFilterWind = () => {
    return {
        type: 'SET_FILTER_WIND'
    }
}
export const setFilterEarth = () => {
    return {
        type: 'SET_FILTER_EARTH'
    }
}