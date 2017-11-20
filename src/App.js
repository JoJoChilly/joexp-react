import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteConfig from './routes';
import Tick from './components/Tick';
import './App.css';

const Item = Menu.Item;

class App extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <Router>
                <div className="App">
                    <Menu>
                        <Item
                            name="home"
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                            href="/"
                        >
                            Home
                        </Item>

                        <Item
                            name="fortune"
                            active={activeItem === 'fortune'}
                            onClick={this.handleItemClick}
                            href="/fortune"
                        >
                            Fortune Today
                        </Item>

                        <Item
                            name="about"
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                            href="/about"
                        >
                            About
                        </Item>

                        <Item
                            name="markdown"
                            active={activeItem === 'markdown'}
                            onClick={this.handleItemClick}
                            href="/markdown"
                        >
                            MarkDown转换器
                        </Item>
                        <Tick />
                    </Menu>
                    <RouteConfig />
                </div>
            </Router>
        );
    }
}

export default App;
