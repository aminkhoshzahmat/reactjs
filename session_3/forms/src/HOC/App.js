import React, { Component } from "react";
import Tasks from "./Tasks";
import { user } from "./ACL";
import Button from "./Button";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Tasks</h2>
        {user.permissions.include("ADD_TASK") && <Button />}
        <Button style={{ coloe: "red" }}>Add task</Button>
        {/* <ACL permissions="ADD_TASK">
          <Button style={{ color: "red" }}>Add task</Button>
        </ACL> */}
        <Button permissions="ADD_TASK" style={{ coloe: "red" }}>
          Add task
        </Button>
      </div>
    );
  }
}
