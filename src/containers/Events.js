import React, {Component} from 'react'
import Event from '../components/Event'
import {connect} from 'react-redux'

class Events extends Component {
    render() {
        const payload = (typeof this.props.events === 'undefined')
            ? "Loading..."
            : this.props.events.map((e) => <Event key={e.domoEvent.eventId} event={e}/>)
        return (
            <div>
                <p>Events:</p>
                {payload}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events
    }
}

export default connect(
    mapStateToProps,
    null
)(Events)