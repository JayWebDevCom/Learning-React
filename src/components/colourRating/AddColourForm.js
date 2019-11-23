import React from 'react';

export const AddColourForm = ({onNewColour = f => f}) => {
    let _title, _colour;

    const submit = e => {
        e.preventDefault();
        onNewColour(_title.value, _colour.value);
        _title.value = '';
        _colour.value = '#000000';
        _title.focus()
    };

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                   type='text'
                   placeholder="colour title..." required/>
            <input ref={input => _colour = input}
                   type='color' required/>
            <button>Add</button>
        </form>
    )
};