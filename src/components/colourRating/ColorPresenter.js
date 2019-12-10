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
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title,
                    color,
                    rating: 0
                }
            ]
        }))
    };

    rateColor = (id, rating) => {
        this.setState(prevState => ({
            colors: prevState.colors.map(color =>
                (color.id !== id) ?
                    color :
                    {
                        ...color,
                        rating
                    }
            )
        }));
    };

    removeColor = (id) => {
        this.setState(prevState => ({
            colors: prevState.colors.filter(
                color => color.id !== id
            )
        }))
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
