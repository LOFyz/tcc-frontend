import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-if-connect.herokuapp.com',
});
export default api;
