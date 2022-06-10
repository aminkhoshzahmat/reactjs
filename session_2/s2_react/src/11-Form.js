import React, { Component } from "react";

/**
 * https://reactjs.org/docs/forms.html
 * https://formik.org/
 * https://react-hook-form.com/    >>> faghat vase function component hast
 *
 * https://final-form.org/react > sabok tare
 *
 * https://www.npmtrends.com/
 */
export default class Form extends Component {
  state = {
    username: "Ali",
    password: "",
  };

  /**
   *
   */
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  /**
   * ma Two way binding nadarim, ba state 1 way darim, ama vase 1way dgash bayad ba onChange khodemun shabih sazi konim.
   */
  handleChangeUsername = (e) => {
    // console.log(e.target.value); // harbar darid rerender mikonid
    this.setState({ username: e.target.value });
  };

  handleChangePassowrd = (e) => {
    this.setState({ password: e.target.value });
  };

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeInput}
          />

          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangeInput}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
