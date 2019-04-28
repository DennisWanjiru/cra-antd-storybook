import React, { Component } from 'react';
import logo from './assets/logo.svg';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            mTree Component Library
            <br/>
            <br/>
            <Button type="primary">AntD Live!</Button>
        </header>
      </div>
    );
  }
}

export default App;
