import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state ={
    string: ''
  }
}
handleChange(value){
this.setState({string: value})
}

  render() {
    return (
      <div className="App">
        <input onChange={(e)=> this.handleChange(e.target.value)}></input>
        <p>{this.state.string}</p>
        
      </div>
    );
  }
}

export default App;
