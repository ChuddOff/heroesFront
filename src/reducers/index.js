// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
//     currentFilter: "all",
//     coolDown: false
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'COOLDOWN_ON':
//             return {
//                 ...state,
//                 coolDown: true
//             }
//         case 'COOLDOWN_OFF':
//             return {
//                 ...state,
//                 coolDown: false
//             }
//         case 'SET_FILTER_ALL':
//             return {
//                 ...state,
//                 currentFilter: "all"
//             }
//         case 'SET_FILTER_FIRE':
//             return {
//                 ...state,
//                 currentFilter: "fire"
//             }
//         case 'SET_FILTER_WATER':
//             return {
//                 ...state,
//                 currentFilter: "water"
//             }
//         case 'SET_FILTER_WIND':
//             return {
//                 ...state,
//                 currentFilter: "wind"
//             }
//         case 'SET_FILTER_EARTH':
//             return {
//                 ...state,
//                 currentFilter: "earth"
//             }
//         default: return state
//     }
// }

// export default reducer;