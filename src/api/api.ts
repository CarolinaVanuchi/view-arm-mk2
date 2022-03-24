export enum RequesterMethodEnum {
  GET = 'GET',
  POST = 'POST',
}

export type RequesterServiceModel = {
  method: RequesterMethodEnum;
  endpoint: string;
  timeout?: number;
  attempt?: number;
};

export type RequesterOptionsModel = {
  data?: any;
};

export type RequesterResponseModel = {
  success: boolean;
  status?: number;
  error?: any;
  data: any;
};
