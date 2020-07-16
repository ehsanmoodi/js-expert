import React, { Component } from 'react';

export default class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };

        setInterval(this.tick.bind(this), 1000);
    }

    render() {
        return (
            <div>
                <p>Hello User!</p>
                <p>It is { this.state.date.toLocaleTimeString() }</p>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}