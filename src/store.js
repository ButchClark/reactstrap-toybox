import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import logger from 'redux-logger'

const initialState = {
    events: {
        events: [],
    },
    order: {},
    display: {
        showStartingSearch: true
    }
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        )
    ))



export default store
