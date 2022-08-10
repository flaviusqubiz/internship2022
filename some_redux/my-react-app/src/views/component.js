import { changeColor, fetchQuote } from "../quotes/actions";
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const randomQuote = 'https://programming-quotes-api.herokuapp.com/quotes/random';
const colors = ["red", "green", "blue", "yellow", "purple", "orange", "teal", "lime", "aqua", "navy", "silver"];

export const QuoteList = () => {
    const someQuote = useSelector((state) => state.quotes);
    const someColor = useSelector((state) => state.colors);
    const dispatch = useDispatch();

    const loadQuote = useCallback(() => {
        fetch(randomQuote).then(resp => resp.json()).then(quoteResp => {
            dispatch(fetchQuote(quoteResp));
        });
    }, [dispatch]);

    const loadColor = useCallback(() => {
        dispatch(changeColor(colors[Math.floor(Math.random() * colors.length)]));
    }, [dispatch]);

    useEffect(() => {
        loadQuote();
        loadColor();
    }, [loadQuote, loadColor]);

    return (
        <ul>
            <li style={{ padding: 8, backgroundColor: someColor }} key={someQuote.id}>
                <p><em>{someQuote.en}</em></p>
                <p>{`─────── ${someQuote.author}`}</p>
            </li>
            <li>
                <button onClick={() => {
                    loadQuote();
                    loadColor();
                }}>
                Load quote
                </button>
            </li>
        </ul>
    );
};