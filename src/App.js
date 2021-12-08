// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Ninjas from './Components/Ninjas';
import NinjaList from './Components/NinjaList';
import AddNinja from './Components/AddNinja';

//Container Component | Statefull
class App extends Component {
  state = {
    ninjas: [
      { myName: 'Anuradha', age: '20', id: 1 },
      { myName: 'Travis', age: '31', id: 2 },
      { myName: 'Head', age: '50', id: 3 }
    ]
  }

  //create a function to expect ninja type object from the form component (AddNinja)
  addNewNinja = (newNinja) => {
    newNinja.id = Math.random();
    console.log(newNinja);
    let ninjasCC = [...this.state.ninjas, newNinja]; /*creating a carbon copy of ninjas with new 
    // ninja value sent from forms component*/
    console.log(ninjasCC);
    this.setState({
      ninjas: ninjasCC
    });

  }

  deleteNinja = (id) => {
    console.log(id);
    let filteredNinjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: filteredNinjas
    })
  }

  render() {
    return (
      <div className="App">

        <h1>This is my first react application</h1>
        <h3>Welcome!</h3>
        <Ninjas myName='Zander' age='10' />
        <NinjaList ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNewNinja={this.addNewNinja} />{/* Sending a function as a prop(parameter) */}
      </div>
    );
  }
}

export default App;
