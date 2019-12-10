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

const sortColor = (sortedBy) =>
    (sortedBy === 'rating') ?
        ({
            type: C.SORT_COLORS,
            sortBy: 'SORTED_BY_RATING'
        }) :
        (sortedBy === 'title') ?
            ({
                type: C.SORT_COLORS,
                sortBy: 'SORTED_BY_TITLE'
            }) :
            ({
                type: C.SORT_COLORS,
                sortBy: 'SORTED_BY_DATE'
            });

export const colorActions = {
    removeColor,
    rateColor,
    addColor,
    sortColor
};