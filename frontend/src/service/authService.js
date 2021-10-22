import axios from '../config/axiosConfig';

const signIn = async data => {
	return await axios.post('/', JSON.stringify(data))
		.then(resp => resp)
};

export default {
	signIn
};