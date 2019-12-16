import React, {Component} from 'react';
import {StarRating} from "./StarRating";
import PropTypes from "prop-types";

export class Color extends Component {

    UNSAFE_componentWillMount() {
        this.style = {
            backgroundColor: '#CCC'
        }
    }

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        this.style = null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {rating} = this.props;
        return rating !== nextProps.rating
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse' ;
        console.log(`${title} is getting a ${status}`)
    }

    render() {
        const {title, color, rating = 0, onRemove = f => f, onRate = f => f} = this.props;
        return (
            <section className={'color'} style={this.style}>
                <h1 ref={"title"}>{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className={'color'}
                     style={{backgroundColor: color}}
                >
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f => f
};