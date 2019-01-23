import React, { Component } from 'react';
import Todos from './Todo';
import AddTodo from './AddTodo'
class App extends Component {
  state={
    todos:[
      {id:1,content:'buy some food'},
      {id:2,content:'play games'}
    ]
  }
  //Making a hooker function that hooks on and get id from component
  todoDelete = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }
  //Make a hooker function that hooks and gets a entiire to do item 
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos , todo];
    this.setState({
      todos
    });
  }
  
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} todoDelete={this.todoDelete}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  };
}

export default App;
