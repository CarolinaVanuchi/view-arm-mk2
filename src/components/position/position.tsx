import { Alert, Col } from "react-bootstrap";
import Requester from '../../api/request';
import { RequesterServiceModel, RequesterMethodEnum } from "../../api/api";
import {useEffect, useState} from 'react';

const Position = () => {
    const [theta1, setTheta1] = useState(0);
    const [theta2, setTheta2] = useState(0);
    const [theta3, setTheta3] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => showAngle(), 1000);
        return () => {
            console.log('bb')
            clearInterval(timer1);
        };
    }, []);

    const showAngle = async () => {

        const service: RequesterServiceModel = {
            method: RequesterMethodEnum.GET,
            endpoint: '/position'
        }
        const { data } = await Requester(service);
        console.log('a', data);
        const {theta1, theta2, theta3} = data;
        setTheta1(theta1);
        setTheta2(theta2);
        setTheta3(theta3);
    }
    return (
        <Col sm={10}>
            <Alert variant="dark">
                <Alert.Heading>Posição Atual</Alert.Heading>
                <div className="info-angle">
                    <div className="item-info">
                        <label>&#952;1:</label>
                        {theta1}
                    </div>
                    <div className="item-info">
                        <label>&#952;2:</label>
                        {theta2}
                    </div> <div className="item-info">
                        <label>&#952;3:</label>
                        {theta3}
                    </div>
                </div>
            </Alert>
        </Col>
    );
}

export default Position;