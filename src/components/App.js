import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import '../styles/App.css'
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
