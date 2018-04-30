export const EVENTS_LOADED = 'EVENTS_LOADED'

export function loadEvents(clientOrderGuid){
    const newEvents = [
        {id: 1, timestamp: 12345, type: "order-accepted-event"},
        {id: 2, timestamp: 34567, type: "order-preprocessed-event"},
        {id: 3, timestamp: 23456, type: "preprocessing-completed-event"},
        {id: 4, timestamp: 45678, type: "tasks-created-event"},
        {id: 5, timestamp: 45778, type: "tasks-created-event"},
        {id: 6, timestamp: 45878, type: "task-started-event"},
        {id: 7, timestamp: 45978, type: "task-completed-event"},
        {id: 8, timestamp: 78909, type: "order-closed-event"},
    ]

    console.log(`>actions.loadEvent() for: ${clientOrderGuid}`)
    return async(dispatch)=>{
        dispatch({type: EVENTS_LOADED, events: newEvents})
    }

}