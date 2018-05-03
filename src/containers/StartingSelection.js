import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadEvents, toggleShowStartingSearch} from "../actions";
import {Form, FormGroup, Button,Col } from 'reactstrap'

class StartingSelection extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            clientOrderGuids: [{clientOrderGuid: '123'},{clientOrderGuid: '345'}]
        }
    }
    guids = () =>{
        let theGuids = this.state.clientOrderGuids.map((cog,index)=><li type="submit" key={index} data-clientorderguid={cog.clientOrderGuid} onClick={this.selectOne}>{cog.clientOrderGuid}</li>)
        return theGuids
    }
    selectOne = (e) =>{
        console.log(`> selectOne(): Loading clientOrderGuid: ${e.target.dataset.clientorderguid}`)
        this.toggleShowStartingSearch()
        this.loadEvents(e.target.dataset.clientorderguid)
    }
    render(){
        let outpoot = this.guids();
        console.log('Got back the following for outpoot')
        console.dir(outpoot)
        return(
            <div>
                <Form >
                    <FormGroup >
                        <Col sm={{size: 10, offset: 3}}>
                            <Button color="warning" onClick={this.selectOne}>Get clientOrderGuids for last 2 days</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Col>
                            <ul>
                                {outpoot}
                            </ul>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadEvents: loadEvents,
    toggleShowStartingSearch: toggleShowStartingSearch
},dispatch)

export default connect(
    null,
    mapDispatchToProps
)(StartingSelection)