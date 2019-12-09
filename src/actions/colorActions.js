import C from '../constants/constants'
import {v4} from "uuid";

const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id
});

const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
});

const addColor = (title, color) => ({
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timeStamp: new Date().toString()
});

export const colorActions = {
    removeColor,
    rateColor,
    addColor
};