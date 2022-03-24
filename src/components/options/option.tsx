import { useState } from 'react';
import { Tab, Row, Col, Nav, Button } from 'react-bootstrap';
import Angle from '../angle/angle';
import Cartesian from '../cartesian/cartesian';
import Position from '../position/position';

const Options = () => {


    const [enable, setEnable] = useState(true);
    const changeEnable = () => {
        setEnable((prevState) => !prevState);
        console.log('here');
        console.log(enable);
    }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="home">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link disabled={enable} eventKey="home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="angle">Ângulo</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="position">Posição</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="trajectory-circular">Trajetória Circular</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="trajectory-circular-final-point">Trajetória Circular com Ponto Final</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="home">
                            <div className="d-grid">
                                <Button variant="success">Ligar</Button> <br />
                                <Button variant="secondary">Go Home</Button> <br />
                                <Button variant="danger">Desligar</Button>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="angle">
                            <Angle changeEnable={changeEnable}></Angle>
                        </Tab.Pane>
                        <Tab.Pane eventKey="position">
                            <Cartesian></Cartesian>
                        </Tab.Pane>
                        <Tab.Pane eventKey="trajectory">
                            ccccccc
                        </Tab.Pane>
                        <Tab.Pane eventKey="trajectory-circular-final-point">
                            ccccccc
                        </Tab.Pane>
                    </Tab.Content>
                </Col>

            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                    <Position></Position>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Options;