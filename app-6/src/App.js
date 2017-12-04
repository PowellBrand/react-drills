import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: ['dust'],
      chore: ''
    }
    this.pushButton = this.pushButton.bind(this)
  }

  handleChange(value) {
    this.setState({
      chore: value
    })
  }

  pushButton() {
    this.setState({
      task: [...this.state.task, this.state.chore]
    })
  }

  render() {
    var listOfTasks = this.state.task.map((element, index) => {
      return (
        <ToDo key={index} task={element}/>
      )
    }

    )
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"
        />
        <button onClick={this.pushButton} >Add</button>
        {listOfTasks}
      </div>

    );
  }
}

export default App;
