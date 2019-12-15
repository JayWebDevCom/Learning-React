import colorsExpectedColors from '../components/colourRating/colorsFileWithSort.json'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {colors} from "../reducers/colorsReducer";
import {sort} from "../reducers/colorsSortReducer";

const stateData = colorsExpectedColors;

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('previous state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result
};

const saver = store => next => action => {
    let result = next(action);
    localStorage.setItem('redux-store', JSON.stringify(store.getState()));
    return result;
};

export const storeFactory = (initialState = stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage.getItem('redux-store')) ?
            JSON.parse(localStorage.getItem('redux-store')) : initialState
    );
