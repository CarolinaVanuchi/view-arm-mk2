import React, { useState } from "react";
import { Row, Col, Button, Form, Figure } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import ArmRobot from '../../assets/images/angle.png';
import Requester from '../../api/request';
import { RequesterServiceModel, RequesterMethodEnum } from "../../api/api";

interface customProps {
    changeEnable: () => void;
}

const Cartesian = (props: customProps) => {
    const [disableButton, setDisableButton] = useState(false);

    const [pointX, setPointX] = React.useState('0');
    const [pointY, setPointY] = React.useState('0');
    const [pointZ, setPointZ] = React.useState('0');

    const sendStop = async () => {
        props.changeEnable();
        setDisableButton(false);
    }

    const sendCartesian = async () => {
        setDisableButton(true);
        props.changeEnable();
        const options = {
            data: {
                pointX,
                pointY,
                pointZ,
            }
        };

        const service: RequesterServiceModel = {
            method: RequesterMethodEnum.POST,
            endpoint: '/cartesian'
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
                                    <label>X</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='dark'
                                        value={pointX}
                                        onChange={e => setPointX(e.target.value)}
                                        min={25}
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
                                    <label>Y</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='dark'
                                        value={pointY}
                                        onChange={e => setPointY(e.target.value)}
                                        min={0}
                                        max={10}
                                        tooltipPlacement='top'
                                        tooltip='on'
                                    />
                                </Col>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>Z</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='dark'
                                        value={pointZ}
                                        onChange={e => setPointZ(e.target.value)}
                                        min={10}
                                        max={18}
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
                                    <Button disabled={disableButton} variant="dark" onClick={sendCartesian}>Mover</Button>

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
                                alt="Cartesiano"
                                src={ArmRobot}
                            />
                        </Figure>
                    </Col>

                </Row>
            </Form>
        </>
    );


}

export default Cartesian;