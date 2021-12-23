import { axiosInstance } from 'api';
import { AxiosRequestConfig } from 'axios';
import { ISampleResDTO } from 'types/DTO/Sample';

enum EUserPaths {
	baseURL = 'https://jsonplaceholder.typicode.com/users',
}

const api = {
	getSampleList(params = {}, option: AxiosRequestConfig = {}) {
		return axiosInstance.get<ISampleResDTO['data']>(EUserPaths.baseURL, { ...option, params });
	},
};

export default api;
