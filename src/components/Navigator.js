import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Tick from './Tick';

export default class Navigator extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item
                    name="home"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item
                    name="articles"
                    active={activeItem === 'articles'}
                    onClick={this.handleItemClick}
                >
                    Articles
                </Menu.Item>

                <Menu.Item
                    name="aboutus"
                    active={activeItem === 'aboutus'}
                    onClick={this.handleItemClick}
                >
                    About Us
                </Menu.Item>
                <Tick />
            </Menu>
        );
    }
}
