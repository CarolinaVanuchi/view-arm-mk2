import { Form, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const FormList = () => {
    const [base, setBase] = React.useState('0');
    const [primeiroElo, setPrimeiroElo] = React.useState('0');
    const [segundooElo, setSegundooElo] = React.useState('0');

    return (
        <>
            <Form>
                <Col sm={12}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm={3}>
                            Nome
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>
                                <label>Base</label>
                            </Form.Label>
                            <Col sm={9}>
                                <RangeSlider
                                    variant='dark'
                                    value={base}
                                    onChange={e => setBase(e.target.value)}
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
                                <label>Primeiro Elo</label>
                            </Form.Label>
                            <Col sm={9}>
                                <RangeSlider
                                    variant='dark'
                                    value={primeiroElo}
                                    onChange={e => setPrimeiroElo(e.target.value)}
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
                                <label>Segundo Elo</label>
                            </Form.Label>
                            <Col sm={9}>
                                <RangeSlider
                                    variant='dark'
                                    value={segundooElo}
                                    onChange={e => setSegundooElo(e.target.value)}
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
                                <Button variant="dark">Salvar</Button>
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