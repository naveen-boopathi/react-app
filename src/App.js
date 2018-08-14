import React, { Component } from 'react';
import Login from './Login.js';
import NavBar from './Nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
