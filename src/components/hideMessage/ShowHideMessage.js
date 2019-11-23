import React from 'react';
import {Expandable} from "../HOC/Expandable";

const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed) ? children.replace(/[a-zA-Z0-9]/g, 'x') : children}
    </p>;

    export const HiddenMessage = Expandable(ShowHideMessage);