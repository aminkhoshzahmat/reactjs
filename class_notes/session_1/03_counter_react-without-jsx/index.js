/**
 * 2ta global variable ijad mishe bade import lib react.
 * - React
 * - ReactDOM
 */

// console.log(React);
// console.log(ReactDOM);

/**
 * age bekhaym component benevisim bayad class besazim, va bayad az
 * React.Component bayad extend kone.
 * bayad method be esme render dashte bashe.
 * bayad ye element react ro hatman return kone
 *  null, true, false > bezarid chizi render nemikone, khoruji nadaran
 *  undefined bedim ghaedatan bayad khata bede.(ama tu version 18 nemide)
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
    return React.createElement("span", {}, this.state.counter);
  }

  increaseButton() {
    return React.createElement(
      "button",
      {
        style: { margin: "10px" },
        className: "button", // class khodesh reserve shode vase class oop
        onClick: () => {
          // in this.setState az React.Component miad
          this.setState({ counter: this.state.counter + 1 });
        },
      },
      "Increase"
    );
  }

  decreaseButton() {
    return React.createElement(
      "button",
      {
        onClick: () => {
          this.setState({ counter: this.state.counter - 1 });
        },
      },
      "Decrease"
    );
  }

  /**
   *
   * Chera state immutable hast va nabayad besurate mostaghim dastkari konim?
   * chon ba setState farakhoni konam, va react bedune ke bayad render ejra kone, dar jaryane taghirat bashe.
   */
  render() {
    console.log("render", this.state.counter);
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

// Deprecated in 18, use createRoot api
// const root = document.getElementById("root");
// ReactDOM.render(element, root);

/**
 * tag html ke gharare app tush render beshe be react moarefi mikonim, ke vasash ye root api ijad kone.
 */
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

/**
 * age babel dashtim tahe index.html be rahati in ghete code ejra mishod, in html nist, JSXe.
 */
// root.render(
//   <div>
//     <Counter />
//   </div>
// );

/**
 * component hai ke lib react sakhte (tu rame) hamun element ke alan kole app hast,
 *  midimesh be reac-dom ke component tu dom ijad kone.
 */
root.render(element);
