// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Ninjas from './Components/Ninjas';
import NinjaList from './Components/NinjaList';

//Container Component | Statefull
class App extends Component {
  state = {
    ninjas: [
      { myName: 'Anuradha', age: '20', id: 1 },
      { myName: 'Travis', age: '31', id: 2 },
      { myName: 'Head', age: '50', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">

        <h1>This is my first react application</h1>
        <h3>Welcome!</h3>
        <Ninjas myName='Zander' age='10' />
        <NinjaList ninjas={this.state.ninjas} />        
      </div>
    );
  }
}

export default App;
