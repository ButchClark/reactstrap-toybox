import React, {Component} from 'react'
import Order from '../components/Order'
import {connect} from 'react-redux'

class OrderContainer extends Component{
    constructor(props){
        super(props)
        this.order = props.order
    }

    render(){

        return (
            <div>
                <h2>The Order</h2>
                <Order order={this.order} />
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        order: state.order
    }
}
export default connect(
    mapStateToProps,
    null
)(OrderContainer)