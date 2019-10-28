import React from 'react'

import {Colour} from './Colour'

export const ColourList = ({cols = [], onRate = f => f, onRemove = f => f}) =>
    <div className='color-list'>
        {(cols.length === 0) ?
            <p>No Colours Listed. (Add a Color)</p> :
            cols.map(color =>
                <Colour key={color.id}
                        {...color}
                        onRate={(rating) => onRate(color.id, rating)}
                        onRemove={() => onRemove(color.id)}
                />
            )
        }
    </div>;
