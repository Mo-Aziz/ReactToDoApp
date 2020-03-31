import React, { Component } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "take the trash out", completed: false },
      { id: 2, title: "feed the dog", completed: false },
      { id: 3, title: "Meet with the boss", completed: false }
    ]
  };

  //toggle complete
  marKComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete to do
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.marKComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
