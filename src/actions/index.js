export const EVENTS_LOADED = 'EVENTS_LOADED'

export function loadEvents(clientOrderGuid){
    const newEvents = [
        {timestamp: 12345, type: "order-accepted-event"},
        {timestamp: 34567, type: "order-preprocessed-event"},
        {timestamp: 23456, type: "preprocessing-completed-event"},
        {timestamp: 45678, type: "tasks-created-event"},
        {timestamp: 45778, type: "tasks-created-event"},
        {timestamp: 45878, type: "task-started-event"},
        {timestamp: 45978, type: "task-completed-event"},
        {timestamp: 78909, type: "order-closed-event"},
    ]

    return async(dispatch)=>{
        dispatch({type: EVENTS_LOADED, events: newEvents})
    }

}