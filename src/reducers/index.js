import { combineReducers } from 'redux'
import events from './events'
import order from './order'
import display from './display'

export default combineReducers({
    events,
    order,
    display
})






