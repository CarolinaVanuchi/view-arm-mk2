import React from 'react';
import { RequesterServiceModel, RequesterMethodEnum } from "../../api/api";
import Requester from '../../api/request';
import { Table, Button } from 'react-bootstrap';
import { FaTrash, FaRegHandPointUp } from 'react-icons/fa';
class TableList extends React.Component {

    state = {
        itensList: []
    };

    async componentDidMount() {
        const service: RequesterServiceModel = {
            method: RequesterMethodEnum.GET,
            endpoint: '/all'
        }
        const { data } = await Requester(service);
        this.setState({
            itensList: data
        });
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Base</th>
                            <th>Primeiro Elo</th>
                            <th>Segundo Elo</th>
                            <th>Excluir</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.itensList.map(item => (
                            <tr key={item.id_angle}>
                                <td>{item.description}</td>
                                <td>{item.theta1}</td>
                                <td>{item.theta2}</td>
                                <td>{item.theta3}</td>
                                <td><Button size="sm" variant='danger'><FaTrash /></Button></td>
                                <td><Button size="sm"><FaRegHandPointUp /></Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableList;