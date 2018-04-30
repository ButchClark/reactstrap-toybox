import React, {Component} from 'react'
import Event from '../components/Event'

class Events extends Component {
    render() {
        let events = [
            {timestamp: 123, type: 'order-accepted-event'},
            {timestamp: 345, type: 'preprocessing-completed-event'},
            {timestamp: 567, type: 'order-preprocessed-event'},
            {timestamp: 666, type: 'tasks-created-event'},
            {timestamp: 789, type: 'order-closed-event'}
        ]

        return (
            <div>
                <p>Events:</p>
                {
                    events.map(e=> <Event event={e}/>)
                }
            </div>
        )
    }
}
export default Events