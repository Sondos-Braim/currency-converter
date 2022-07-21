import { createSelector } from 'reselect';

const getCurrenciesSelector = state => state.availableCurrencies;

export const selectCurrencies = createSelector(
  getCurrenciesSelector,
  (currencies) => Object.keys(currencies).map(key => ({value: key, label: key}))
);
