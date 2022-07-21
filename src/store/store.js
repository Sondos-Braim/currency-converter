import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
    chosenCurrency: null,
    isSelectCurrencyOpen: false,
    availableCurrencies: {},
    convertCurrency: '',
    exchangeRate: ''
}

export default function configureStore() {
 return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
 );
}
