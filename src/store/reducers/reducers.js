export const availableCurrencies = (state = {}, action) => {
  switch (action.type) {
    case "GET_AVAILABLE_CURRENCIES":
      return action.payload;
    default:
      return state;
  }
};

export const chosenCurrency = (state = {}, action) => {
  switch (action.type) {
    case "SET_CHOSEN_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

export const isSelectCurrencyOpen = (state = {}, action) => {
  switch (action.type) {
    case "SET_IS_SELECTOR_OPEN":
      return action.payload;
    default:
      return state;
  }
};

export const convertCurrency = (state = {}, action) => {
  switch (action.type) {
    case "CONVERT_CURRENCY":
      return action.payload;
    default:
      return state;
  }
};

export const exchangeRate = (state = {}, action) => {
  switch (action.type) {
    case "SET_EXCHANGE_RATE":
      return action.payload;
    default:
      return state;
  }
};
