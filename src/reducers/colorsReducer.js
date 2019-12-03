import C from '../constants/constants'
import {color} from "./colorReducer";

export const colors = (colorsState = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [
                ...colorsState,
                color({}, action)
            ];
        case C.RATE_COLOR:
            return colorsState.map(c => color(c, action));
        case C.REMOVE_COLOR:
            return colorsState.filter(c => c.id !== action.id);
        default:
            return colorsState;
    }
};

