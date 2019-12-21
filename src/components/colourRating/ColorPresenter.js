import React from 'react';
import {AddColourForm} from "./AddColourForm";
import {ColorList} from "./ColorList";
import {storeFactory} from "../../stores/colorStoreFactory";

export const ColorPresenter = (props) => {

    const {state, logger} = props;
    const store = storeFactory(state, logger);

    // store.subscribe(() => console.log('subs called'));

    return (
        <div>
            <AddColourForm store={store}/>
            <ColorList store={store}/>
        </div>
    );
};
