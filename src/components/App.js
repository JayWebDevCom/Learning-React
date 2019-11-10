import React, {Component} from 'react';

import {AddColourForm} from './AddColourForm'
import {ColorList} from './ColorList'

import colorsFile from '../colorsFile'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: colorsFile.colors
        }
    }

    render() {
        const {colors} = this.state;

        const log = (t, c) => {
            alert(`New colour: ${t} ${c}`)
        };

        return (
            <div className={'app'}>
                <AddColourForm onNewColour={log}/>
                <ColorList colors={colors}/>
            </div>
        )
    }
}

export default App;
