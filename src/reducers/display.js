import {TOGGLE_SHOW_STARTING_SEARCH} from "../actions";
const initialState = {
    events: {
        events: [],
    },
    order: {},
    display: {
        showStartingSearch: true
    }
}
export default function display(state=initialState, action){
    console.log(`>reducers.display() - action.type: ${action.type}`)
    switch(action.type){
        case TOGGLE_SHOW_STARTING_SEARCH:
            return {
                ...state,
                showStartingSearch: !state.showStartingSearch
            }
        default:
            return state
    }
}