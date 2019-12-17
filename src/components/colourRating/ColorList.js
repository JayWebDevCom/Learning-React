import React from 'react'
import {Color} from './Color'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {colorActions} from "../../actions/colorActions";

const InternalColorList = ({store}) => {

    const {colors} = store.getState();

    return (
        <div className='color-list'>
            {(colors.length === 0) ?
                <p>No Colours Listed. (Add a Color)</p> :
                colors.map(color =>
                    <Color key={color.id}
                           {...color}
                           onRate={(rating) => store.dispatch(colorActions.rateColor(color.id, rating))}
                           onRemove={() => store.dispatch(colorActions.removeColor(color.id))}
                    />
                )
            }
        </div>
    );
};

const mapStateToProps = state => ({
        colors: state.colors
    });

export const ColorList = connect(mapStateToProps)(InternalColorList);

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};