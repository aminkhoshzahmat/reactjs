import React, { Component } from "react";

export default class CreateRef extends Component {
  state = {
    show: false,
  };

  /**
   * eshare dare be real dom asli,
   * current: age vojud dashte bashe ke ref mide be element, age na null mide.
   */
  textInput = React.createRef();

  /**
   * har moghe khasti ba state ghabli koni, az callback estefade konid (state) =>...
   * focus ye event ke marbut be DOM hast(real dom), vaghti ta mount nashode va hanuz tu virtual dom hast, ba ref faghat
   * mishe behesh dastresi dasht.
   * harvaght umad tu real dom taze tul o arzo hoviat peyda mikone.
   */
  toggle = () => {
    this.setState(
      (sstate) => ({ show: !this.state.show }),
      () => {
        console.log(this.textInput, "async complete");

        // if (this.textInput.current) {
        //   this.textInput.current.focus();
        // }
        this.textInput.current?.focus(); // current mitune null | element bashe
      }
    );
    // console.log(this.textInput);
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && <input ref={this.textInput} />}
      </div>
    );
  }
}
