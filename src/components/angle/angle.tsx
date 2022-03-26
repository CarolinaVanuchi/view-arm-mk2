import React, {useState} from "react";
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

    const [theta1, setValue1] = React.useState('0');
    const [theta2, setValue2] = React.useState('0');
    const [theta3, setValue3] = React.useState('0');
   
    const sendStop = async () => {
        props.changeEnable();
        setDisableButton(false);
    }
    
    const sendAngle = async () => {
       setDisableButton(true);
        props.changeEnable();
        const options = {
            data: {
                theta1,
                theta2,
                theta3,
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
            <Row>
                <Col sm={8}>
                    <Row>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="1">
                                    <label>&#952;1</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='secondary'
                                        value={theta1}
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
                                    <label>&#952;2</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='secondary'
                                        value={theta2}
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
                                    <label>&#952;3</label>
                                </Form.Label>
                                <Col sm="11">
                                    <RangeSlider
                                        variant='secondary'
                                        value={theta3}
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
                    <br />
                    <Row>
                        <Col sm={6}>
                            <div className="d-grid">
                                <Button disabled={disableButton} variant="secondary" onClick={sendAngle}>Mover</Button>

                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="d-grid">
                                <Button disabled={!disableButton} onClick={sendStop} variant="danger">Parar</Button>
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
        </>
    );


}

export default Angle;