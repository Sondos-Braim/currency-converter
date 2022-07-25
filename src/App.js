import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import {
  getAvailableCurrencies,
  setChosenCurrency,
  setIsSelectorOpen,
} from "./store/actions/actions";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import SelectCurrency from "./components/SelectCurrency";
import { selectCurrencies } from "./store/selectors.js/selectors";
import { modalStyles } from "./components/components.style";

const CurrencyConverter = React.lazy(() =>
  import("./components/CurrencyConverter")
);
const ExchangeRate = React.lazy(() => import("./components/ExchangeRate"));

function App(props) {
  useEffect(() => {
    props.getAvailableCurrencies();
  }, []);

  useEffect(() => {
    if (!props.chosenCurrency) {
      let currency = localStorage.getItem("currency");
      if (currency) {
        props.setChosenCurrency(currency);
      } else {
        props.setIsSelectorOpen(true);
      }
    }
  }, [props.chosenCurrency]);

  return (
    <div className="App">
      <HeaderComponent />
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="exchange-rate" element={<ExchangeRate />} />
        </Routes>
      </React.Suspense>

      <ReactModal
        isOpen={props.isSelectCurrencyOpen}
        appElement={document.getElementById("root")}
        style={modalStyles}
      >
        <SelectCurrency />
      </ReactModal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    availableCurrencies: selectCurrencies(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAvailableCurrencies: () => dispatch(getAvailableCurrencies()),
  setChosenCurrency: (currency) => dispatch(setChosenCurrency(currency)),
  setIsSelectorOpen: (isOpen) => dispatch(setIsSelectorOpen(isOpen)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
