import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import {AddColourForm} from './AddColourForm'
import {ColorList} from './ColorList'
import {v4} from 'uuid';
import colorsFile from '../colorsFile'
import {Clock} from "./clock/Clock";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: colorsFile.colors
        };
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    addColor = (title, color) => {
        console.log(v4());
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({colors})
    };

    rateColor = (id, rating) => {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating
                }
        );

        this.setState({colors})
    };

    removeColor = (id) => {
        const colors = this.state.colors.filter(
            color => color.id !== id
        );

        this.setState({colors});
    };

    render() {

        const {addColor, rateColor, removeColor} = this;
        const {colors} = this.state;

        return (
            <Router>
                <Route exact path="/">
                    <div className={'app'}>
                        <Link to="/clock">Clock</Link>
                        <AddColourForm onNewColour={addColor}/>
                        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor}/>
                    </div>
                </Route>
                <Route exact path="/clock">
                    <Clock/>
                </Route>
            </Router>
        )
    }
}

export default App;
