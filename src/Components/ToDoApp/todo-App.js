//paste this content in the App.js file to render

// import React, { Component } from 'react';
// import ToDos from './Components/ToDoApp/ToDos';
// import AddToDoTask from './Components/ToDoApp/AddToDoTask';

// //Container Component | Statefull
// class App extends Component {
//   state = {
//     toDos: [
//       { content: 'buy some milk', id: 1 },
//       { content: 'get some sugar', id: 2 },
//       { content: 'get tea leaves packet', id: 3 }
//     ]
//   }

//   onSpanClickDeleteAction = (id) => {
//     let filteredToDos = this.state.toDos.filter(todo => {
//       return todo.id !== id
//     });
//     this.setState({
//       toDos: filteredToDos
//     });
//   }

//   addNewTask = (newTask) => {
//     newTask.id = Math.random();
//     let toDosCC = [...this.state.toDos, newTask];
//     this.setState({
//       toDos: toDosCC
//     })
//   }

//   render() {
//     return (
//       <div className="App container">
//         <h2 className="center blue-text">ToDo App</h2>
//         <AddToDoTask addToDoTask={this.addNewTask} />
//         <ToDos toDos={this.state.toDos} deleteToDo={this.onSpanClickDeleteAction} />
//       </div>
//     );
//   }
// }

// export default App;
