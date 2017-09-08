import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteConfig from './routes';
import Tick from './components/Tick';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div className="App">
          <Menu>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              href="/"
            >
              Home
            </Menu.Item>

            <Menu.Item
              name="articles"
              active={activeItem === 'articles'}
              onClick={this.handleItemClick}
              href="/articles"
            >
              Articles
            </Menu.Item>

            <Menu.Item
              name="about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              href="/about"
            >
              About
            </Menu.Item>
            <Tick />
          </Menu>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to JoExp</h2>
          </div>
          <RouteConfig />
        </div>
      </Router>
    );
  }
}

export default App;
