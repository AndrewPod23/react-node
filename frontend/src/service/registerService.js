import axios from '../config/axiosConfig';

const registerUser = async data => {
  return await axios.post('/register', JSON.stringify(data))
    .then(res => console.log(res))
};

export default {
  registerUser
};