import React from 'react';
import colorsFile from "./colorsFile"
import {v4} from "uuid";
import {AddColourForm} from "./AddColourForm";
import {ColorList} from "./ColorList";

export class ColorPresenter extends React.Component {

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
            <div>
                <AddColourForm onNewColour={addColor}/>
                <ColorList colors={colors} onRate={rateColor} onRemove={removeColor}/>
            </div>
        )
    }
}
