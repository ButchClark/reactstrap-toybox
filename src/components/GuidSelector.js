import React from 'react'
import {Button, Input, Form, FormGroup} from 'reactstrap'
import {loadEvents} from "../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class GuidSelector extends React.Component {

    loadOrderHandler = (e) =>{
        e.preventDefault()
        console.log(">GuidSelector.loadOrderHandler()...")
        this.props.loadEvents(e.target.guid.value)
    }
    render() {

        return (
            <Form onSubmit={(e)=>this.loadOrderHandler(e)}>
                <FormGroup >
                    <Input name="guid" placeholder="clientOrderGuid"/>
                    <Button color="warning" type="submit">Load Order</Button>
                </FormGroup>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadEvents: loadEvents
},dispatch)

export default connect(
    null,
    mapDispatchToProps
)(GuidSelector)