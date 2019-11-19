import React, {Children} from 'react';
import {ChildrenComp} from './ChildrenComp';

export const ReactChildrenPresenter = () => {

    const age = 30;

    const WhenTruthy = ({children}) =>
        Children.only(children);

    const WhenFalsy = ({children}) =>
        Children.only(children);

    return ( <div>
            {/*<ChildrenComp ifTruthy={age > 29}>*/}
            {/*    <WhenTruthy>*/}
            {/*        <h1>Ok when truthy</h1>*/}
            {/*    </WhenTruthy>*/}
            {/*    <WhenFalsy>*/}
            {/*        <h1>Ok when falsy</h1>*/}
            {/*    </WhenFalsy>*/}
            {/*</ChildrenComp>*/}
            not working
        </div>
    )
};