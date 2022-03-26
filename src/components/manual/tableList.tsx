import React from "react";
import { Table } from 'react-bootstrap';

const TableList = () => {
    return (
        <>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        
                       
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default TableList;