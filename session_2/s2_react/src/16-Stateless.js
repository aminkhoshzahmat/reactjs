import React, { Component } from "react";

export default class Stateless extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

/**
 * Stateless component
 * bahse function component ha ijad shod, dge bikhiale this o ers bari mishid
 */
function User({ user }) {
  return <div>{user.name}</div>;
}

/**
 * with state component
 */
// class User extends Component {
//   render() {
//     const user = this.props.user;
//     return <div key={user.id}>{user.name}</div>;
//   }
// }
