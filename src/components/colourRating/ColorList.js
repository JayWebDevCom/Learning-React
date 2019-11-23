import React from 'react'
import {Color} from './Color'
import PropTypes from 'prop-types'

export const ColorList = ({colors = [], onRate = f => f, onRemove = f => f}) =>
    <div className='color-list'>
        {(colors.length === 0) ?
            <p>No Colours Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                       {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)}
                />
            )
        }
    </div>;

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};