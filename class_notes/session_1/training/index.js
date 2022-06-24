class Counter extends React.Component {
  state = {
    counter: 0,
  };

  valueElement() {
    return React.createElement("span", {}, this.state.counter);
  }

  increaseElement() {
    return React.createElement(
      "button",
      {
        style: { margin: "10px" },
        className: "custom-class",
        onClick: () => {
          this.setState({ counter: this.state.counter + 1 });
        },
      },
      "Increase"
    );
  }

  decreaseElement() {
    return React.createElement(
      "button",
      {
        onClick: () => {
          this.setState({ counter: this.state.counter - 1 });
        },
      },
      "Increase"
    );
  }

  render() {
    return React.createElement(
      "div",
      {},
      this.valueElement(),
      this.increaseElement(),
      this.decreaseElement()
    );
  }
}

const element = React.createElement(Counter);

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(element);
