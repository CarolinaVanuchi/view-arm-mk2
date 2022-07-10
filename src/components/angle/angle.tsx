import React, { useState } from "react";
import { Row, Col, Button, Form, Figure } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import ArmRobot from '../../assets/images/angulo.png';
import Requester from '../../api/request';
import { RequesterServiceModel, RequesterMethodEnum } from "../../api/api";

interface customProps {
    changeEnable: () => void;
}

const Angle = (props: customProps) => {
    const [disableButton, setDisableButton] = useState(false);

    const [theta1, setTheta1] = React.useState('0');
    const [theta2, setTheta2] = React.useState('0');
    const [theta3, setTheta3] = React.useState('0');

    const sendStop = async () => {
        props.changeEnable();
        setDisableButton(false);
    }

    const sendAngle = async () => {
        setDisableButton(true);
        
        let theta1_d = parseFloat(theta1);
        let theta2_d = parseFloat(theta2);
        let theta3_d = parseFloat(theta3);
        props.changeEnable();
        const options = {
            data: {
                "theta1": theta1_d,
                "theta2": theta2_d,
                "theta3": theta3_d,
            }
        };

        const service: RequesterServiceModel = {
            method: RequesterMethodEnum.POST,
            endpoint: '/angle'
        }

        const { data } = await Requester(service, options);
    }

    return (
        <>
            <Form>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>&#952;1</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='dark'
                                        value={theta1}
                                        onChange={e => setTheta1(e.target.value)}
                                        min={0}
                                        max={180}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>&#952;2</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='dark'
                                        value={theta2}
                                        onChange={e => setTheta2(e.target.value)}
                                        min={0.0}
                                        max={30}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>&#952;3</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='dark'
                                        value={theta3}
                                        onChange={e => setTheta3(e.target.value)}
                                        min={0}
                                        max={60}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={6}>
                                <div className="d-grid">
                                    <Button disabled={disableButton} variant="dark" onClick={sendAngle}>Mover</Button>

                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="d-grid">
                                    <Button disabled={!disableButton} onClick={sendStop} variant="danger">Liberar</Button>
                                </div>
                            </Col>
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
            </Form>
        </>
    );


}

export default Angle;