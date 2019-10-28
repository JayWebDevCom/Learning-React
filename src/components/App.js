import React, {Component} from 'react';

import {AddColourForm} from './AddColourForm'
import {ColourList} from './ColourList'
export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colours: []
        }
    }
  render() {
        const colours = this.state;

        const log = (t, c) => {
            alert(`New colour: ${t} ${c}`)
        };

      return(
          <div className={'app'}>
              <AddColourForm onNewColour={log}/>
              <ColourList colours={{colours}}/>

          </div>
      )
  }
}

export default App;
