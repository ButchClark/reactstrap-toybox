import React, {Component} from 'react'
import {Card,CardBody} from 'reactstrap'

class OrderContainer extends Component{
    constructor(props){
        super(props)
        this.order = props.order
    }

    render(){

        return (
            <div>
                <h2>The Order</h2>
                <Card>
                    <CardBody>{JSON.stringify(this.order)}</CardBody>
                </Card>
            </div>
        )
    }
}

export default OrderContainer