import React, { Component } from 'react';

import './App.css';

class App extends Component {

constructor(){
  super()

  this.state={
    filterBox:'',
    arrayItems:['brandon','amber','david','lisa']
  }
}

handleChange(value){
this.setState({
  filterBox: value
})
}



  render() {
    var stuffToDisplay = this.state.arrayItems.filter( (element, index) => {
      return element.includes( this.state.filterBox );
    }).map( (element, index) => {
      return <h1 key={ index }>{ element }</h1>

    })
    return (
      <div className="App">    
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" /> 
        {stuffToDisplay}     
      </div>
    );
  }
}

export default App;
