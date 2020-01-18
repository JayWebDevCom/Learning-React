import React from 'react';

export const Color = ({rating, onRate = f => f, onRemove = f => f}) =>
    <div className={'mock-color'}>
        <button className={'rate'} onClick={() => onRate(rating)}/>
        <button className={'remove'} onClick={() => onRemove(rating)}/>
    </div>;
