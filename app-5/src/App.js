import React, { Component } from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image url = 'http://via.placeholder.com/350x150' />
      </div>
    );
  }
}

export default App;
