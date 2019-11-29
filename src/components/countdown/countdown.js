import React from "react";

export const CountDown = ({count, tick, reset}) => {
    if (count) {
        setTimeout(() => tick(count), 1000)
    }

    return (
        <div>
            <h1>Actions and Action Creators</h1>
            {(count) ?
            <h2>{count}</h2> :
            <div>
                <span>CELEBRATE !!</span>
                <span>Click <span onClick={() => reset(10)}>here</span> to start over</span>
            </div>}
        </div>);
};
