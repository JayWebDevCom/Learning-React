import React from 'react';

export const Color = ({rating, onRate = f => f}) =>
    <div className={'mock-color'}>
        <button className={'rate'} onClick={() => onRate(rating)}/>
    </div>;
