import { combineReducers } from 'redux'
import eventsReducer from './events'
import orderReducer from './order'
import displayReducer from './display'

const rootReducer = combineReducers({
    events: eventsReducer,
    order: orderReducer,
    display: displayReducer
})


export default rootReducer
