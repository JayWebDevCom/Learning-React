import {applyMiddleware, combineReducers, createStore} from "redux";
import {colors} from "../reducers/colorsReducer";
import {sort} from "../reducers/colorsSortReducer";

export const quietLogger = store => next => action =>
    next(action);

const saver = store => next => action => {
    let result = next(action);
    localStorage.setItem('redux-store', JSON.stringify(store.getState()));
    return result;
};

export const storeFactory = (initialState, logger) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage.getItem('redux-store')) ?
            JSON.parse(localStorage.getItem('redux-store')) : initialState
    );
