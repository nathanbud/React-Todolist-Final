import React, {Component} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {
  state = {
  todos:[],
  currentTodo:{
    text:'',
    key:''
  }
  }

  handleInput = (e) =>{
    this.setState({
      currentTodo:{
        text:e.target.value,
        key:Date.now()
      }
    })
    console.log(this.state.currentTodo.text);
  }

  addTodo = () =>{

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Todo List   
        </header>
        <div className="container">
          <AddTodo addtodo = {this.handleInput}/>
          <Todos/>
        </div>
      </div>
  
    );
  }
}


export default App;
