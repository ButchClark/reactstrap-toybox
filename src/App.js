import React, {Component} from 'react';
import OrderContainer from './containers/OrderContainer'
import Events from './containers/Events'
import {Container, Row, Col} from 'reactstrap'
import GuidSelector from "./components/GuidSelector";
import StartingSelection from './containers/StartingSelection'
import {connect} from 'react-redux'


class App extends Component {

    render() {
        console.log(`>App - this.props.showStartingSearch: ${this.props.showStartingSearch}`)
        let payload = this.props.showStartingSearch === true
            ? <Row><StartingSelection /></Row>
            : <div>
                <Row >
                    <Col xs="8"> </Col> <Col xs="4" className="pull-right"> <GuidSelector/> </Col> </Row><Row><Col><OrderContainer/> </Col> <Col> <Events /></Col> </Row></div>


        return (
            <Container>
                {payload}
            </Container>
        )
    }
}

const mapStateToProps = state =>{
    return {
        showStartingSearch : state.display.showStartingSearch
    }
}

export default connect(
    mapStateToProps,
    null
)(App)
