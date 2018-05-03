import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loadEvents, toggleShowStartingSearch, getOrderAcceptedCount} from "../actions";
import {Form, FormGroup, Button,Col } from 'reactstrap'

class StartingSelection extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            clientOrderGuids: []
        }
    }
    getCurrentGuids =()=>{

    }
    guids = () =>{
        let theGuids = this.state.clientOrderGuids.map((cog,index)=><li type="submit" key={index} data-clientorderguid={cog.clientOrderGuid} onClick={this.selectOne}>{cog.clientOrderGuid}</li>)
        return theGuids
    }
    selectOne = (e) =>{
        console.log(`> selectOne(): Loading clientOrderGuid: ${e.target.dataset.clientorderguid}`)
        this.props.toggleShowStartingSearch()
        this.props.loadEvents(e.target.dataset.clientorderguid)
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
                        <Col sm={{size: 10, offset: 3}}>
                            <Button color="danger" onClick={this.props.getOrderAcceptedCount}>Hit Review Mongo DOMO_FOE</Button>
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
    toggleShowStartingSearch: toggleShowStartingSearch,
    getOrderAcceptedCount: getOrderAcceptedCount
},dispatch)

export default connect(
    null,
    mapDispatchToProps
)(StartingSelection)