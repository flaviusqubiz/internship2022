import { fetch_quote } from "./actions";
import { change_background } from "./actions";

const initialState = {};

export const quotesReducer = (state = initialState, action) => {
    switch(action.type) {
        case fetch_quote:
            return action.payload;
        default:
            return state;
    }
};

const initialColor = "";

export const colorReducer = (state = initialColor, action) => {
    switch(action.type) {
        case change_background:
            return action.payload;
        default:
            return state;
    }
}