import React from 'react'
import {Button, InputGroup, InputGroupAddon, Input} from 'reactstrap'

class GuidSelector extends React.Component {

    render() {

        return (
            <div>
                <InputGroup>
                    <Input placeholder="clientOrderGuid"/>
                    <InputGroupAddon addonType="append"><Button color="warning" >Load Order</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}


export default GuidSelector