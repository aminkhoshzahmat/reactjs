/**
 * 2ta global variable ijad mishe bade import lib react.
 * - React
 * - ReactDOM
 */

// console.log(React);
// console.log(ReactDOM);

/**
 * https://babeljs.io/
 * mituni behesh begi be che version tabdil kone, az felan version chrome masalan start bezan.
 * pollyfil > jaygozin kardan, masalan miad promise be ye chiz dge tabdil mikone rewrite mikone!!!
 *
 * bad ye modat ghabeliat haye bishtar behesh dadan
 * - TypeScript (super set js) tabdil kone be JS.
 * - tabdile JSX be JS.
 */

/**
 * age bekhaym component benevisim bayad class besazim, va bayad az
 * React.Component bayad extend kone.
 * bayad method be esme render dashte bashe.
 * bayad ye element react ro hatman return kone
 *  null, true, false > bezarid chizi render nemikone, khoruji nadaran
 *  undefined bedim ghaedatan bayad khata bede.
 *
 * vaghti harf az attribute mizanim, pure html nist, khodesh badan be pure tabdil mishe
 */

class Counter extends React.Component {
  /**
   * Immutable hast, nemishe taghiresh dad mostaghiman.
   * vase taghiresh bayad az khode react bekhayd inkaro kone.
   * mitunid tu ya birun constructur tarifesh konid
   */
  state = {
    counter: 10,
  };

  valueElement() {
    // return React.createElement("span", {}, this.state.counter);
    // ba babel mishe ino tabdil kar be in paini, darim JSX mizanim
    // yani <span> inja syntax jsx hast
    // harja bekhay vasate jsx code js bezani bayad az {} komak begiri, magar na text mishe
    return <span>{this.state.counter}</span>;
  }

  increaseButton() {
    // return React.createElement(
    //   "button",
    //   {
    //     style: { margin: "10px" },
    //     className: "button", // class khodesh reserve shode vase class oop
    //     onClick: () => {
    //       // in this.setState az React.Component miad
    //       this.setState({ counter: this.state.counter + 1 });
    //     },
    //   },
    //   "Increase"
    // );

    // {} avali be jsx mige in js hast, {} props haye khode element
    return (
      <button
        style={{ marginLeft: "10px" }}
        className="button"
        onClick={() => this.setState({ counter: this.state.counter + 1 })}
      >
        Increase
      </button>
    );
  }

  decreaseButton() {
    return (
      <button
        className="button"
        onClick={() => this.setState({ counter: this.state.counter - 1 })}
      >
        Decrease
      </button>
    );
    // return React.createElement(
    //   "button",
    //   {
    //     onClick: () => {
    //       this.setState({ counter: this.state.counter - 1 });
    //     },
    //   },
    //   "Decrease"
    // );
  }

  /**
   *
   * Chera state immutable hast va nabayad besurate mostaghim dastkari konim?
   * chon ba setState farakhoni konam, va react bedune ke bayad render  ejra kone.
   */
  render() {
    console.log("render", this.state.counter);

    return (
      <div>
        {this.valueElement()}
        {this.increaseButton()}
        {this.decreaseButton()}
      </div>
    );

    return React.createElement(
      // hatman bayad ye wrapper bashe, va yechiz return beshe.
      "div",
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    );
  }
}

// const element = React.createElement("p", {}, 10);
const element = React.createElement(Counter);

// Deprecated in 18
// const root = document.getElementById("root");
// ReactDOM.render(element, root);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(element);
