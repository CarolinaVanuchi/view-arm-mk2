import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequesterOptionsModel, RequesterResponseModel, RequesterServiceModel } from './api';

const baseURLApi = "http://localhost:4000/api/";

const requesterConfig = {
    baseURL: baseURLApi,
    defaultTimeout: 10000,
    maxRetry: 3
}

const Requester: any = async (
    service: RequesterServiceModel,
    options: RequesterOptionsModel = {
        data: undefined,
    }
) => {
    const { defaultTimeout, baseURL, maxRetry } = requesterConfig;
    const { method, endpoint, timeout = defaultTimeout, attempt = 1 } = service;
    const { data } = options;

    const config: AxiosRequestConfig = {
        method,
        baseURL,
        url: endpoint,
        timeout,
        data,
    };

    return axios
        .request(config)
        .then((response: AxiosResponse) => {
            const result: RequesterResponseModel = {
                success: true,
                status: response.status,
                error: null,
                data: response.data || response,
            };
            return result;
        })
        .catch((error: AxiosError) => {
            if (attempt <= maxRetry) {
                const retryService = {
                    ...service,
                    attempt: attempt + 1,
                };
                return Requester(retryService, options);
            }
        });
};

export default Requester;
