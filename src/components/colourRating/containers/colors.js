import {connect} from "react-redux";
import {colorActions} from "../../../actions/colorActions";
import {ColorList} from '../ColorList'

export const Colors = connect(
    state => ({
        colors: [...state.colors]
    }),
    dispatch => ({
        onRemove(id) {
            dispatch(colorActions.removeColor(id))
        },
        onRate(id, rating) {
            dispatch(colorActions.rateColor(id, rating))
        }
    })
)(ColorList);