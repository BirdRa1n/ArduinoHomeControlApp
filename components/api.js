import axios from 'axios';
const api = axios.create({
  baseURL: 'https://apiarduinowebcontrol.herokuapp.com/',
});
export default api;