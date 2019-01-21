import React, { Component } from 'react';
import Todos from './Todo'

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
  
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} todoDelete={this.todoDelete}/>
      </div>
    );
  };
}

export default App;
