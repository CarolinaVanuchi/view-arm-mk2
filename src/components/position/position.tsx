import { Alert, Col } from "react-bootstrap";

const Position = () => {
    return (
        <Col sm={10}>
            <Alert variant="dark">
                <Alert.Heading>Posição Atual</Alert.Heading>
                <div className="info-angle">
                    <div className="item-info">
                        <label>&#952;1:</label>
                    </div>
                    <div className="item-info">
                        <label>&#952;2:</label>
                    </div> <div className="item-info">
                        <label>&#952;3:</label>
                    </div>
                </div>
            </Alert>
        </Col>
    );
}

export default Position;