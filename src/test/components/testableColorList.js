import React from 'react';
import PropTypes from 'prop-types'
import {Color} from '../../components/colourRating/Color';

export const TestableColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                       {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)} />
            )
        }
    </div>;

TestableColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};