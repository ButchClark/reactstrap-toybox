import {ORDER_LOADED} from "../actions";

const initialState = { order: {} }

export default function orderReducer(state=initialState, action){
    console.log(`>reducers.order(): action.type: ${action.type}`)
    switch(action.type){
        case ORDER_LOADED:
            return action.order

        default:
            return state
    }
}
