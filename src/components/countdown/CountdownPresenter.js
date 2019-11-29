import React from 'react';
import ReactDOM from 'react-dom'
import {CountdownDispatcher} from "../../actions/CountdownDispatcher";
import {countdownActions} from "../../actions/countdownActions"
import {CountdownStore} from "../../stores/CountdownStore"
import {CountDown} from "./countdown"

export default () => {
    const appDispatcher = new CountdownDispatcher();
    const actions = countdownActions(appDispatcher);
    const store = new CountdownStore(10, appDispatcher);

    const render = count => ReactDOM.render(
        <CountDown count={count} {...actions}/>,
        document.getElementById('react-container'));

    store.on('TICK', () => {
        render(store.count)
    });

    store.on('RESET', () => {
         render(store.count)
    });

    return render(store.count)
}