import React from 'react'
import {Button, Card, CardText, CardBody, CardTitle, Collapse} from 'reactstrap'

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
        console.log('>Event:  event=')
        console.dir(this.event)
        let cardProps = {}
        if( this.event.domoEvent.type === 'order-accepted-event'){
            cardProps.body="true"
            cardProps.inverse="true"
            cardProps.color="info"
        }
        console.log(` .. cardProps: ${cardProps}`)

        return (
            <div>
                {/*<Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Toggle</Button>*/}
                <Collapse isOpen={true}>
                    <CardTitle>{this.event.domoEvent.type}</CardTitle>
                    <Card {...cardProps}>
                    {/*<Card body inverse color={this.event.domoEvent.type==="order-accepted-event"?"warning":"info"}>*/}
                        <CardText> {this.event.createdAt} - {this.event.domoEvent.type} </CardText>
                    </Card>
                </Collapse>
                < Button color="info"> Toggle </Button>
            </div>
        )
    }
}

export default Event
