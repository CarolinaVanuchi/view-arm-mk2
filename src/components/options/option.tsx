import { useState } from 'react';
import { Tab, Row, Col, Nav, Button } from 'react-bootstrap';
import Angle from '../angle/angle';
import Cartesian from '../cartesian/cartesian';
import Manual from '../manual/manual';
import Position from '../position/position';
import './option.css';

const Options = () => {

    const [notEnable, setEnable] = useState(false);
    const changeEnable = () => {
        setEnable((prevState) => !prevState);
    }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="home">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                            <Nav.Link disabled={notEnable} eventKey="home">Início</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                            <Nav.Link disabled={notEnable} eventKey="angle">Ângulo</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link disabled={notEnable} eventKey="position">Posição</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link disabled={notEnable} eventKey="points">Lista de Pontos</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={7}>
                    <Tab.Content>
                        <Tab.Pane eventKey="home">
                            <h1>Bem-Vindo ao painel de controle do Arm MK2 Plus</h1>
                            <span>Existem três opções, controle por cinemática direta, cinemática inversa, e utilizar lista de pontos criadas</span>
                        </Tab.Pane>
                        <Tab.Pane eventKey="angle">
                            <Angle changeEnable={changeEnable}></Angle>
                        </Tab.Pane>
                        <Tab.Pane eventKey="position">
                            <Cartesian changeEnable={changeEnable}></Cartesian>
                        </Tab.Pane>
                        <Tab.Pane eventKey="points">
                            <Manual></Manual>
                        </Tab.Pane>
                    </Tab.Content>
                    <br />
                    <Col sm={12}>
                        <Position></Position>
                    </Col>
                </Col>
            </Row>

        </Tab.Container>
    );
}

export default Options;