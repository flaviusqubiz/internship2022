import { colorReducer, quotesReducer } from "./reducer";
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    quotes: quotesReducer,
    colors: colorReducer
});

export const store = createStore(rootReducer);