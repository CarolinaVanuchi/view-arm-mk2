import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Requester from '../../api/request';
import { RequesterServiceModel, RequesterMethodEnum } from "../../api/api";


const FormList = () => {
    const [theta1, setTheta1] = React.useState('0');
    const [theta2, setTheta2] = React.useState('0');
    const [theta3, setTheta3] = React.useState('0');
    const [description, setDescription] = React.useState('');

    const saveAngle = async () => {
        const options = {
            data: {
                theta1,
                theta2,
                theta3,
                description,
            }
        };

        const service: RequesterServiceModel = {
            method: RequesterMethodEnum.POST,
            endpoint: '/save'
        }

        const { data } = await Requester(service, options);
    }

    return (
        <>
            <Form>
                <Col sm={12}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm={3}>
                            Nome
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                <label>&#952;1</label>
                            </Form.Label>
                            <Col sm={9}>
                                <RangeSlider
                                    variant='dark'
                                    value={theta1}
                                    onChange={e => setTheta1(e.target.value)}
                                    min={0}
                                    max={50}
                                    tooltipPlacement='top'
                                    tooltip='on'
                                />
                            </Col>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                <label>&#952;2</label>
                            </Form.Label>
                            <Col sm={9}>
                                <RangeSlider
                                    variant='dark'
                                    value={theta2}
                                    onChange={e => setTheta2(e.target.value)}
                                    min={0}
                                    max={50}
                                    tooltipPlacement='top'
                                    tooltip='on'
                                />
                            </Col>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                <label>&#952;3</label>
                            </Form.Label>
                            <Col sm={9}>
                                <RangeSlider
                                    variant='dark'
                                    value={theta3}
                                    onChange={e => setTheta3(e.target.value)}
                                    min={0}
                                    max={50}
                                    tooltipPlacement='top'
                                    tooltip='on'
                                />
                            </Col>
                        </Form.Group>

                    </Row>
                    <br />
                    <Row>
                        <Col sm={12}>
                            <div className="d-grid">
                                <Button variant="dark" onClick={saveAngle}>Salvar</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Form>
            <br />
        </>
    );
}

export default FormList;