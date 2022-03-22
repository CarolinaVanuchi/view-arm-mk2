import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import Api from './api';


export class AngleApi {

    theta1: number;
    theta2: number;
    theta3: number;

    constructor(theta1: number, theta2: number, theta3: number) {
        this.theta1 = theta1;
        this.theta2 = theta2;
        this.theta3 = theta3;
    }

    url: string = 'http://localhost:4000/api/angle';

    post() {

        console.log('this.url');
        console.log(this.url);
        const angle = { theta1: this.theta1, theta2: this.theta2, theta3: this.theta3 };
        axios.post(this.url, angle).then(response => console.log(response.status));
    }

}