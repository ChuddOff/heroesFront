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