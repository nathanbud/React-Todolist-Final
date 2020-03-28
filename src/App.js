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

  addTodo = (e) =>{
    e.preventDefault();
    let todo = this.state.currentTodo;
    let todos = [...this.state.todos, todo]
    this.setState({
      todos,
      currentTodo:{
        text: '',
        key: ''
      }
    })
   console.log(todos);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            Todo List   
        </header>
        <div className="container">
          <AddTodo inputtodo = {this.handleInput} addtodo ={this.addTodo} todos = {this.state}/>
          <Todos todos = {this.state.todos}/>
        </div>
      </div>
  
    );
  }
}


export default App;
