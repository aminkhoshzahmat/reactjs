import React from "react";
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
 * chon change kardan DOM kheily por hazine hast,
 * ma ru virtual dom in taghirato taghir midim,
 * react real dom ba virtual dom moghayese mikone ty ue baze zamani khas,
 *  age tafavot bebine mire un taghir ro tu real dom mide.
 *  virtual dom ye object hast, vazife react dom hast ke bebare ba virtual o real kar kone.
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

export default class Counter extends React.Component {
  /**
   * Immutable hast, nemishe taghiresh dad mostaghiman.
   * vase taghiresh bayad az khode react bekhayd inkaro kone.
   * mitunid tu ya birun constructur tarifesh konid
   */
  state = {
    counter: 11,
  };

  /**
   *
   * Chera state immutable hast va nabayad besurate mostaghim dastkari konim?
   * chon ba setState farakhoni konam, va react bedune ke bayad render  ejra kone.
   */
  render() {
    console.log("render", this.state.counter);

    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          style={{ marginLeft: "10px" }}
          className="button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          className="button"
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    );
  }
}
