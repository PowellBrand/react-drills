import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      string: ['one', 'two', 'three', 'four']
    }
  }

  render() {
    var stuffToDisplay = this.state.string.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        {stuffToDisplay }
      </div>
    );
  }
}

export default App;
