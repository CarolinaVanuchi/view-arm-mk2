import React from "react";
import { Row, Col, Button, Form, Figure } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import ArmRobot from '../../assets/images/angulo.png';

const Cartesian = () => {
    const [x, setValue1] = React.useState('0');
    const [y, setValue2] = React.useState('0');
    const [z, setValue3] = React.useState('0');

    const getValues = () => {

    }

    return (
        <>
            <Row>
                <Col sm={8}>
                    <Row>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>X</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='secondary'
                                        value={x}
                                        onChange={e => setValue1(e.target.value)}
                                        min={0}
                                        max={50}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Row>


                    <Row>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>Y</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='secondary'
                                        value={y}
                                        onChange={e => setValue2(e.target.value)}
                                        min={0}
                                        max={50}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Row>

                    <Row>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>Z</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='secondary'
                                        value={z}
                                        onChange={e => setValue3(e.target.value)}
                                        min={0}
                                        max={50}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Row>

                    <Row>
                        <div className="d-grid">
                            <Button variant="secondary" onClick={getValues}>Mover</Button>

                        </div>
                    </Row>
                </Col>

                <Col sm={4}>
                    <Figure>
                        <Figure.Image
                            alt="Ângulo"
                            src={ArmRobot}
                        />
                    </Figure>
                </Col>

            </Row>
        </>
    );

}

export default Cartesian;