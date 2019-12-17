import React from 'react';
import colorsFile from "./colorsFileWithSort"
import {AddColourForm} from "./AddColourForm";
import {ColorList} from "./ColorList";
import {storeFactory} from "../../stores/colorStoreFactory";

export const ColorPresenter = () => {

    const store = storeFactory(colorsFile);

    store.subscribe(() => console.log('subs called'))

        return (
            <div>
                <AddColourForm store={store}/>
                <ColorList store={store}/>
            </div>
        );
};
