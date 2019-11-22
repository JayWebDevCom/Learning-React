import React, {Component} from 'react';
import {Expandable} from "./Expandable";

class MenuButton extends Component {

    componentWillReceiveProps(nextProps) {
        const collapsed =
            (nextProps.collapsed && nextProps.collapsed === true);
        this.setState({collapsed})
    }

    render() {
        const {children, collapsed, text, expandCollapse} = this.props;
        return (
            <div className={'pop-button'}>
                <button onClick={expandCollapse}>{text}</button>
                {(!collapsed) ?
                    <div className={'pop-up'}>
                        {children}
                    </div> :
                    ""
                }
            </div>
        )
    }
}

const PopUpButton = Expandable(MenuButton);

export const ExportedPopupButton = () =>
        <PopUpButton hidden={true} text="toggle message" >
            <h1>Hidden Content</h1>
            <p>This content will start off hidden</p>
        </PopUpButton>;
