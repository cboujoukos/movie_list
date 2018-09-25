import React, { Component } from 'react';

import './App.css';
import Lists from './components/Lists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Lists />
      </div>
    );
  }
}

export default App;
