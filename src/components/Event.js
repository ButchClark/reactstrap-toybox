import React from 'react'
import {Button, Card, CardBody, Collapse} from 'reactstrap'

const Event = (props) => {
    const {event} = props
    if (!this.state) {
        this.state = {collapse: false}
    }

    const toggle = () =>{
        this.setState({collapse: !this.state.collapse})
    }

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{marginBottom: '1rem'}}>Toggle</Button>
            <Collapse isOpen={true}>
                <Card>
                    <CardBody>
                        {event.timestamp} - {event.type}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}

export default Event
