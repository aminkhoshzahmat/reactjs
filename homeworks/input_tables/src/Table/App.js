import Table from "./Table";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    users: [],
  };

  columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (field, record, index) => {
        return `${field.city} ${field.suite} ${record.phone}`;
      },
    },
  ];

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Table data={this.state.users} columns={this.columns} rowKey="id" />
      </div>
    );
  }
}
