import { Tabs, Tab, Row, Col } from "react-bootstrap";
import FormList from "./formList";
import TableList from "./tableList";

const Manual = () => {
    return (
        <>
            <Row>
                <Col sm={10}>
                    <Tabs defaultActiveKey="list" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="list" title="Lista Salva &#952;">
                            <TableList></TableList>
                        </Tab>
                        <Tab eventKey="create" title="Criar Lista &#952;">
                            <FormList></FormList>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default Manual;