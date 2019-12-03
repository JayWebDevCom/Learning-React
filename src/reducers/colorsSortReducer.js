import C from '../constants/constants'

export const sort = (style = 'SORTED_BY_DATE', action) => {
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy;
        default:
            return style;
    }
};

