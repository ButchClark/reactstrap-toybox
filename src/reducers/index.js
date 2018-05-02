import {
    EVENTS_LOADED,
    TOGGLE_SHOW_COMPOSE
} from '../actions/index'

const initialState={
    events: []
}

export function events(state=initialState, action){

    console.log(`>reducers.events(): action.type: ${action.type}`)
    switch(action.type){
        case EVENTS_LOADED:
            console.log(">reducers.EVENTS_LOADED ")
            return {
                ...state,
                events: action.events
            }

        case TOGGLE_SHOW_COMPOSE:
            console.log(">reducers.TOGGLE_SHOW_COMPOSE here...")
            return {
                ...state,
                showCompose: !state.events.showCompose
            }

        default:
            return state
    }
}