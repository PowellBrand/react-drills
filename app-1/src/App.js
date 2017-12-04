import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state ={
    string: ''
  }
}

  render() {
    return (
      <div className="App">
        <input onChange></input>
        <button>working</button>
      </div>
    );
  }
}

export default App;
