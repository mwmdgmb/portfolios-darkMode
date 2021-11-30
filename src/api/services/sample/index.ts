import { axiosInstance } from 'api';
import { AxiosRequestConfig } from 'axios';

enum EUserPaths {
	baseURL = '/',
}

const api = {
	getSampleList(params = {}, option: AxiosRequestConfig = {}) {
		return axiosInstance.get<any>(EUserPaths.baseURL, { ...option, params });
	},
};

export default api;
