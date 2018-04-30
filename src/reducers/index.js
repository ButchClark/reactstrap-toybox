import EVENTS_LOADED
    from '../actions/index'

const initialState={
    order: {},
    events: []
}

export function events(state=initialState, action){

    switch(action.type){
        case EVENTS_LOADED:
            return {
                ...state,
                events: action.events
            }

        default:
            return state
    }
}