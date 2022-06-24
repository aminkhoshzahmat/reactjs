import React, { Component } from "react";

export default class AdvancedSetState extends Component {
  state = {
    todos: [],
    count: 0,
  };

  generateTodo() {
    const time = Date.now();
    return {
      title: `Todo: ${time}`,
      id: time,
    };
  }

  addTodo = () => {
    const todo = this.generateTodo();
    /**
     * state be surate Async update mishe!!!
     * badesh mitunid ye callback ham anjam bedid vaghti karesho anjam dad.
     */
    // this.setState({ todos: [...this.state.todos, todo] });
    this.setState(
      (state) => ({ todos: [...state.todos, todo] }),
      () => {
        console.log("New: ", this.state.todos);
      }
    ); // this dge nadarim inja!
    /**
     * harbar age gharare state ba state ghablie update beshe az setState callback
     *
     */
    //  this.setState({ count: this.state.todos.length });
    this.setState((state) => ({ count: state.todos.length }));
  };

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <div>Count: {this.state.todos.length}</div>
        <ol>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}
