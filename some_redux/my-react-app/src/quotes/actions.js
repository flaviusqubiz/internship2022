export const fetch_quote = 'FETCH_QUOTE';

export const fetchQuote = (quote) => {
    return {
        type: fetch_quote,
        payload: quote
    }
}

export const change_background = 'CHANGE_BACKGROUND';

export const changeColor = (color) => {
    return {
        type: change_background,
        payload: color
    }
}