import React from 'react';
import {colorActions} from "../../actions/colorActions";

export const AddColourForm = ({store}) => {
    let _title, _colour;

    const submit = e => {
        e.preventDefault();
        store.dispatch(colorActions.addColor(_title.value, _colour.value));
        _title.value = '';
        _colour.value = '#000000';
        _title.focus()
    };

    return (
        <form onSubmit={submit} id={'add-color-form'}>
            <input ref={input => _title = input}
                   type='text'
                   placeholder="colour title..." required/>
            <input ref={input => _colour = input}
                   type='color' required/>
            <button>Add</button>
        </form>
    )
};