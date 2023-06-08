import { createContext, useContext, useReducer } from "react"
import { reducer } from './reducer'



const MyContext = createContext()

export const useMyContext = () => useContext(MyContext)


const initialValue = {
    coinsWatchlist: []
}


const MyContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialValue)
    const { coinsWatchlist } = state

    const addToWatchlist = (coin) => {
        dispatch({ type: 'ADD_TO_WATCHLIST', payload: coin })
    }

    const removeFromWatchlist = (id) => {
        dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id })
    }

    const removeAllFromWatchlist = () => {
        dispatch({ type: 'REMOVE_ALL' })
    }


    const value = {coinsWatchlist, addToWatchlist, removeFromWatchlist, removeAllFromWatchlist}
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider