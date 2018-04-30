import {
    EVENTS_LOADED
} from '../actions/index'

const initialState={
    events: []
}

export function events(state=initialState, action){

    switch(action.type){
        case EVENTS_LOADED:
            console.log(">reducers.EVENTS_LOADED ")
            return {
                events: action.events
            }

        default:
            return state
    }
}