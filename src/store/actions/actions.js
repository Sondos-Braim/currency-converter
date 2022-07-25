import {
  GET_AVAILABLE_CURRENCIES,
  GET_AVAILABLE_CURRENCIES_FAILED,
  SET_CHOSEN_CURRENCY,
  SET_CHOSEN_CURRENCY_FAILED,
  SET_IS_SELECTOR_OPEN,
  CONVERT_CURRENCY,
  CONVERT_CURRENCY_FAILED,
  SET_EXCHANGE_RATE,
  SET_EXCHANGE_RATE_FAILED,
} from "../types";
import axiosInstance from "../../axios";

export const getAvailableCurrencies = () => (dispatch) => {
  try {
    axiosInstance
      .get(`symbols`, {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_AVAILABLE_CURRENCIES,
          payload: res.data.symbols,
        });
      });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_AVAILABLE_CURRENCIES_FAILED,
      payload: e,
    });
  }
};

export const setChosenCurrency = (payload) => (dispatch) => {
  try {
    dispatch({
      type: SET_CHOSEN_CURRENCY,
      payload: payload,
    });
    localStorage.setItem("currency", payload);
  } catch (e) {
    console.log(e);
    dispatch({
      type: SET_CHOSEN_CURRENCY_FAILED,
      payload: e,
    });
  }
};

export const setIsSelectorOpen = (payload) => (dispatch) => {
  try {
    dispatch({
      type: SET_IS_SELECTOR_OPEN,
      payload: payload,
    });
  } catch (e) {
    console.log(e);
  }
};

export const setConvertResult = (payload) => (dispatch) => {
  try {
    axiosInstance
      .get(`convert`, {
        params: {
          from: payload.from,
          to: payload.to,
          amount: payload.amount,
        },
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        dispatch({
          type: CONVERT_CURRENCY,
          payload: res.data.result,
        });
      });
  } catch (e) {
    console.log(e);
    dispatch({
      type: CONVERT_CURRENCY_FAILED,
      payload: e,
    });
  }
};

export const setExchangeRate = (payload) => async (dispatch) => {
  try {
    let USDRate = await axiosInstance.get(`latest`, {
      params: {
        base: "USD",
        symbols: payload,
      },
      headers: {
        apikey: process.env.REACT_APP_API_KEY,
      },
    });
    let EURRate = await axiosInstance.get(`latest`, {
      params: {
        base: "EUR",
        symbols: payload,
      },
      headers: {
        apikey: process.env.REACT_APP_API_KEY,
      },
    });
    dispatch({
      type: SET_EXCHANGE_RATE,
      payload: {
        USD: USDRate.data.rates[payload],
        EUR: EURRate.data.rates[payload],
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: SET_EXCHANGE_RATE_FAILED,
      payload: e,
    });
  }
};
