import axios from 'axios';
import { history } from '../App';

//TODO: change baseURL so it can be accessible from different hosts 
//like: http://192.168.100.6:4005
//add it to .env file

const axiosInstance = axios.create({
	baseURL: 'http://localhost:4005',
	headers: {
		'Content-Type': 'application/json',
		Authorization: localStorage.getItem('access_token')
	}
});

axiosInstance.interceptors.response.use(res => {
	return res;
}, err => {
	if (err.response.status === 401) {
		history.push('/')
	} else return Promise.reject(err);

});

export default axiosInstance;
