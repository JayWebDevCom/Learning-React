import {createStore, combineReducers} from 'redux';
import {colors} from "../reducers/colorsReducer";
import {sort} from "../reducers/colorsSortReducer";
import colorsFileWithSort from '../components/colourRating/colorsFileWithSort'

export const colorsStore = createStore(
    combineReducers({colors, sort}),
    colorsFileWithSort
);

// const logState = () =>
//     console.log('new state', colorsStore.getState());
//
// colorsStore.subscribe(logState);