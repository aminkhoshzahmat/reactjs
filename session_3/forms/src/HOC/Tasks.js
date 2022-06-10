import React, { Component } from "react";
export default class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" },
      { id: 4, title: "Task 4" },
    ],
  };
  render() {
    return (
      <div>
        <ol>
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
