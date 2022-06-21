import { Table, Button } from 'react-bootstrap';
import Requester from '../../api/request';
import { RequesterServiceModel, RequesterMethodEnum } from "../../api/api";
import { useEffect, useState } from 'react';
import { FaTrash, FaRegHandPointUp } from 'react-icons/fa';
import React from 'react';

const TableList = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetchApi();
        const timerList = setInterval(() => fetchApi(), 3000);
        return () => {
            clearInterval(timerList);
        }
    }, []);

    const deleteIten = async (id_angle: string) => {
        let confirm_delete = confirm("Deseja excluir este item? De Cod. " + id_angle);

        if (confirm_delete) {

            const service: RequesterServiceModel = {
                method: RequesterMethodEnum.DELETE,
                endpoint: '/remove'
            }
            const option = {
                data: {
                    id_angle
                }
            };
            await Requester(service, option);
            fetchApi();
        }
    }

    const sendValues = async (valuesIten: any) => {
        const theta1 = valuesIten.theta1;
        const theta2 = valuesIten.theta2;
        const theta3 = valuesIten.theta3;
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

    const fetchApi = async () => {

        const service: RequesterServiceModel = {
            method: RequesterMethodEnum.GET,
            endpoint: '/all'
        }
        const { data } = await Requester(service);
        setRepos(data);
        console.log('repos');

    }
    return (
        <>
            {<Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>&#952;1</th>
                        <th>&#952;2</th>
                        <th>&#952;3</th>
                        <th>Excluir</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        repos.map((val: any, key: any) => {
                            return (
                                <tr key={val.id_angle}>
                                    <td>{val.description}</td>
                                    <td>{val.theta1}</td>
                                    <td>{val.theta2}</td>
                                    <td>{val.theta3}</td>
                                    <td><Button size="sm" variant='danger' onClick={() => deleteIten(val.id_angle)}><FaTrash /></Button></td>
                                    <td><Button size="sm"><FaRegHandPointUp onClick={() => sendValues(val)} /></Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>}
        </>
    );
}

export default TableList;