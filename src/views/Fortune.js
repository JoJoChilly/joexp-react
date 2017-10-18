import React, { Component } from 'react';

export default class Fortune extends Component {
    state = {
        buttonText: 'Click Me Thinking What U Care The Most',
        luckyNum: 0
    };

    getRandomNumber = (min, max) => {
        const minInt = Math.ceil(min);
        const maxInt = Math.floor(max);
        return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
    };

    setLocalStorage = (luckyNum, dateStr) => {
        window.localStorage.setItem(
            'fortuneToday',
            JSON.stringify({
                luckyNum,
                date: dateStr
            })
        );
    };

    getTodayFortune = dateStr => {
        let luckyNum = this.getRandomNumber(1, 10);
        if (
            window.localStorage.getItem('fortuneToday') &&
            JSON.parse(window.localStorage.getItem('fortuneToday')).date ===
                dateStr &&
            JSON.parse(window.localStorage.getItem('fortuneToday'))
        ) {
            luckyNum = JSON.parse(window.localStorage.getItem('fortuneToday'))
                .luckyNum;
        }
        return luckyNum;
    };

    computingFortune = () => {
        const date = new Date();
        const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const luckyNum = this.getTodayFortune(dateStr);

        this.setState({
            luckyNum,
            buttonText: 'Finished'
        });
        this.setLocalStorage(luckyNum, dateStr);
    };

    handleFortune = () => {
        this.setState({ buttonText: 'Compiling...' });
        this.computingFortune();
    };

    render() {
        const luckyText = [
            'Worst',
            'Worse',
            'Bad',
            'A little bit Bored',
            'Normal',
            'Good',
            'Better',
            'Best',
            'Best Ever',
            'Meet the One'
        ][this.state.luckyNum - 1];
        return (
            <div>
                <h5>Get today fortune here:</h5>
                <button onClick={this.handleFortune}>
                    {this.state.buttonText}
                </button>
                <h1>{luckyText}</h1>
            </div>
        );
    }
}
