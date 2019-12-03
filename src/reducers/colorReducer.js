import C from '../constants/constants'

export const color = (colorState = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            };
        case C.RATE_COLOR:
            return (colorState.id !== action.id) ?
                colorState :
                {
                    ...colorState,
                    rating: action.rating
                };
        default:
            return colorState;
    }
};

