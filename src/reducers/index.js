import {combineReducers} from 'redux'
import gamesReducer from './gamesReducer'

const initState = {
    namae: '',
    isLogged: false,
}

const userReducer = (state = initState,action) => {
    switch(action.type){
        default:
            return {...state}
    }
}
const rootReducers = combineReducers({
    games:gamesReducer,
    user: userReducer 
})

export default rootReducers