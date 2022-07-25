import { combineReducers } from "redux";
import {
  availableCurrencies,
  chosenCurrency,
  isSelectCurrencyOpen,
  convertCurrency,
  exchangeRate,
} from "./reducers";

export default combineReducers({
  availableCurrencies,
  chosenCurrency,
  isSelectCurrencyOpen,
  convertCurrency,
  exchangeRate,
});
