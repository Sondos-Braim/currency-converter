import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    apikey: process.env.REACT_APP_API_KEY,
  }
});

export default axiosInstance;
