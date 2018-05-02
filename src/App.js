import React, {Component} from 'react';
import OrderContainer from './containers/OrderContainer'
import Events from './containers/Events'
import {Container, Row, Col} from 'reactstrap'
import GuidSelector from "./components/GuidSelector";

class App extends Component {

    render() {
        let order = {
            clientOrderGuid: '1212-13131-1414',
            attributes: {
                attrib1: "attrib1-value",
                attrib2: "attrib2-value"
            }
        }

        return (
            <Container>
                <Row >
                    <Col xs="8">
                    </Col>
                    <Col xs="4" className="pull-right">
                     <GuidSelector/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <OrderContainer order={order}/>
                    </Col>
                    <Col>
                        <Events />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;
