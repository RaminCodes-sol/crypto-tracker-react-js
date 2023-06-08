


export const reducer = (state, action) => {
    if (action.type === 'ADD_TO_WATCHLIST') {
       return {
        coinsWatchlist: [...state.coinsWatchlist, action.payload]
       }
    }
    
    if (action.type === 'REMOVE_FROM_WATCHLIST') {
        return {
            coinsWatchlist: state.coinsWatchlist.filter(coin => coin.id !== action.payload)
        }
    }

    if (action.type === 'REMOVE_ALL') {
        return {
            coinsWatchlist: []
        }
    }
}