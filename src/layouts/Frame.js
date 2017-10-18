import React, { Component } from 'react';
import Nav from './Nav';

export default class Frame extends Component {
    render() {
        return (
            <div className="frame">
                <div className="header">
                    <Nav />
                </div>
                <div className="container" />
            </div>
        );
    }
}
