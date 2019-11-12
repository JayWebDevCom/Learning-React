import React, {Component} from 'react';

export class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: "time loading..."
        };
    }

    oneSecond = () => 1000;
    getCurrentTime = () => new Date();
    show = (time) => {
        this.setState({time});
    };

    compose = (...fns) => (arg) =>
        fns.reduce((composed, f) => f(composed), arg);

    serializeClockTime = date => ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

    civilianHours = clockTime => ({
        ...clockTime,
        hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
    });

    appendAMPM = clockTime => ({
        ...clockTime,
        ampm: (clockTime.hours > 12) ? 'PM' : 'AM'
    });

    display = target => time => target(time);

    formatClock = format => time =>
        format.replace('hh', time.hours)
            .replace('mm', time.minutes)
            .replace('ss', time.seconds)
            .replace('tt', time.ampm);

    prependZero = key => clockTime => ({
        ...clockTime,
        [key]: clockTime[key] < 10 ?
            "0" + clockTime[key] :
            clockTime[key]
    });

    convertToCivilianTime = clockTime =>
        this.compose(
            this.appendAMPM,
            this.civilianHours
        )(clockTime);

    doubleDigits = civilianTime =>
        this.compose(
            this.prependZero("hours"),
            this.prependZero("minutes"),
            this.prependZero("seconds"),
        )(civilianTime);


    startTicking = () =>
        setInterval(
            this.compose(
                this.getCurrentTime,
                this.serializeClockTime,
                this.convertToCivilianTime,
                this.doubleDigits,
                this.formatClock("hh:mm:ss tt"),
                this.display(this.show)
            ),
            this.oneSecond()
        );


    componentWillMount() {
        this.startTicking()
    }

    render() {
        return (
            <div>
                <h2>The time is:</h2>
                <div>
                    <h3>{this.state.time}</h3>
                </div>
            </div>
        )
    }
}