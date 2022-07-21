import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data/'
});

export default axiosInstance;
