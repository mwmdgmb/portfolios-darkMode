import axios, { Canceler } from 'axios';

let cancel: [string, Canceler][] = [];

export const cancelAllRequest = () => {
	cancel.map(item => {
		item[1]();
		return '';
	});
};

export const axiosInstance = axios.create({
	// baseURL is set from .env file
	headers: {},
});

axiosInstance.interceptors.request.use(
	function (response) {
		// set token in here

		return response;
	},

	function (error) {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	function (response) {
		if (
			response.config.method === 'post' ||
			(response.config.method === 'POST' && response.status === 200 && response?.data.message)
		) {
			// show message and notif
		}

		return response;
	},

	function (error) {
		if (error.response?.data.message) {
			if (error.response.status === 401 || error.response.status === 403) {
				// remove localStorage and exit user
			}
		}

		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	},
);

export enum EMethods {
	get = 'get',
	post = 'post',
	delete = 'delete',
}
