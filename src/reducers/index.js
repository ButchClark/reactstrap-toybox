import {
    EVENTS_LOADED,
    ORDER_LOADED,
    TOGGLE_SHOW_COMPOSE,
    TOGGLE_SHOW_STARTING_SEARCH
} from '../actions/index'

const initialState = {
    events: {
        events: [],
    },
    order: {},
    display: {
        showStartingSearch: true
    }
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


export function order(state=initialState, action){
    console.log(`>reducers.order(): action.type: ${action.type}`)
    switch(action.type){
        case ORDER_LOADED:
            return action.order

        default:
            return state
    }
}

export function display(state=initialState, action){
    console.log(`>reducers.display() - action.type: ${action.type}`)
    switch(action.type){
        case TOGGLE_SHOW_STARTING_SEARCH:
            return {
                ...state,
                showStartingSearch: !state.display.showStartingSearch
            }
        default:
            return state
    }
}