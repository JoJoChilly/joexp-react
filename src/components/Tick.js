import React, { Component } from 'react';

export default class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const tickStyle = {
      position: 'absolute',
      right: '20px',
      lineHeight: '40px'
    };
    return (
      <div style={tickStyle}>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}
