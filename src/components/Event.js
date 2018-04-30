import React from 'react'
import {Button, Card, CardBody, Collapse} from 'reactstrap'

class Event extends React.Component {

    state = {collapsed: false}

    constructor(props) {
        super(props)
        this.event = props.event
    }

    // toggle() {
    //     console.log(': this.state :')
    //     console.dir(this.state)
    //
    //     if(typeof this.state ==='undefined'){
    //         console.log("this.state is undefined!")
    //     }
    //     console.log('this.state: ')
    //     console.dir(this.state)
    //     if (typeof this.state === 'undefined' || typeof this.state.collapse === 'undefined') {
    //         this.setState({collapse: false})
    //     } else {
    //         this.setState({collapse: !this.state.collapse})
    //     }
    //     console.log(': Exiting --- now, this.state :')
    //     console.dir(this.state)
    // }

    render() {
        return (
            <div key={this.event.id}>
                {/*<Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Toggle</Button>*/}
                <Button color="primary" style={{marginBottom: '1rem'}}>Toggle</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {this.event.timestamp} - {this.event.type}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }

}

export default Event
