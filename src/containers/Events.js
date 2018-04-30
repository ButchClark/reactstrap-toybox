import React, {Component} from 'react'
import Event from '../components/Event'

class Events extends Component {
    render() {
        let events = [
            {id: 1, timestamp: 123, type: 'order-accepted-event'},
            {id: 2, timestamp: 345, type: 'preprocessing-completed-event'},
            {id: 3, timestamp: 567, type: 'order-preprocessed-event'},
            {id: 4, timestamp: 666, type: 'tasks-created-event'},
            {id: 5, timestamp: 789, type: 'order-closed-event'}
        ]
        return (
            <div>
                <p>Events:</p>
                {
                    events.map(e=> <Event key={e.id} event={e}/>)
                }
            </div>
        )
    }
}
export default Events