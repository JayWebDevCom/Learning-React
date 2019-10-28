import React from 'react';
import {StarRating} from "./StarRating";

export const Colour = (title, colour, rating=0, onRemove=f=>f, onRate=f=>f) =>
    <section className={'color'}>
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className={'color'}
             style={{backGroundColour: colour}}
        >
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>

        </div>
    </section>;