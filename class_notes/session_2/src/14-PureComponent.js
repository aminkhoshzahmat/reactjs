import React, { Component } from "react";

/**
 * age parent update beshe, child ha ham re render mishan
 * state, props update beshan
 * forceUpdate
 */
export default class PureComponent extends Component {
  state = {
    counter1: 0,
    counter2: 0,
  };
  render() {
    console.log("parent");
    return (
      <div>
        <div>Counter1: {this.state.counter1}</div>
        <div>Counter2: {this.state.counter2}</div>
        <button
          onClick={() =>
            this.setState((state) => ({ counter1: state.counter1 + 1 }))
          }
        >
          Counter 1
        </button>
        <button
          onClick={() =>
            this.setState((state) => ({ counter2: state.counter2 + 1 }))
          }
        >
          Counter 2
        </button>
        <MyComponent counter={this.state.counter1} />
        {/* harbar darim ye object jadid misazim, data > dare refrence taghir mikone, purecomponent nemifahme update anjam bede */}
        {/* pas behtare az componentShouldUpdate estefade konam */}
        <MyPureComponent counter={{ data: this.state.counter2 }} />
      </div>
    );
  }
}

class MyComponent extends Component {
  /**
   * dar surati taghir bede ke chizi avaz shode bshe, ejaze render bede
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.counter !== this.props.counter) {
      return true;
    }
    return false;
  }

  render() {
    console.log("MyComponent");
    return <div>MyComponent : {this.props.counter.data}</div>;
  }
}

/**
 * mitunid jolo update az samte parent begirid, dar ezaye taghir update state,props,forceupdate, parent changes
 * mitunid dar ezaye update parent jolosho begirid, ama pure component jolo state,props,forceupdate nemitune.
 *
 *
 * PureComponent besurate hidden hame karaye shouldComponentUpdate dasti mikone
 */
class MyPureComponent extends React.PureComponent {
  render() {
    console.log("MyPureComponent");
    return <div>MyPureComponent : {this.props.counter}</div>;
  }
}
