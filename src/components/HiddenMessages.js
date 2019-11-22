import React, {Component} from 'react';
import {HiddenMessage} from './HiddenMessage'
import {HiddenMessage as HiddenMessageWithClick} from './Expandable/HiddenMessage'

export class HiddenMessages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                "this is message one",
                "this is message two",
                "this is message three",
            ],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let {showing, messages} = this.state;
            showing = (++showing >= messages.length) ? -1 : showing;
            this.setState({showing})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const {messages, showing} = this.state;
        return (
            <div>
                <div className={'hidden-messages'}>
                    {messages.map((message, i) =>
                        <HiddenMessage key={i} hide={i !== showing}>
                            {message}
                        </HiddenMessage>
                    )}
                </div>
                <div className={'hidden-messages'}>
                    {messages.map((message, i) =>
                        <HiddenMessageWithClick key={i} hide={i !== showing}>
                            {message}
                        </HiddenMessageWithClick>
                    )}
                </div>
            </div>
        )
    }
}