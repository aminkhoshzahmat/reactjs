import React from 'react';

class Counter extends React.Component {

    // state = {
    //     counter: this.props.defaultValue
    // }

    // or

    /**
     * age constructor darim, ba super bauad behesh props beresunim.
     * chon js nemitune automatic constructor parent o call kone, va pishfarz un khali mimune.
     * Props read only hast
     */
    constructor(props) {
        super(props);
        this.state = {
            counter: props.defaultValue
        }

        /**
         * tu constructor bind konim behtare, hey to render bind nakonim, performance khub nist.
         */
        this.increase = this.increase.bind(this) // yadavari mikonim ke yadesh nare vaghti raft tu donyaye dom. ye context dge.
    }

    /**
     * lexical function, normal function
     * this inja eshare mikone be object jari, uni ke ma tush alan hastim.
     * this dar zamane ejra negah mikone bebine kojast
     *
     * chera lazem be bind shod, tu lahze creation ke mirim be dom, dge this ma taghir karde, raftim tu ye context dge.
     */
    increase(arg) {
        console.log(this)
        // console.log(arg)
        this.setState({counter: this.state.counter + 1})
    }

    /**
     * arrow function ha prototype nadaran, nemishe new kard azashun, bind o ina nemishan.
     * be this scope parent eshare mikonan.
     *
     * this dar zamane tarif mimunan, va ta akhar mimunan.
     * az lahze creation hamunja negah mikone va ta abad this ba khodesh negah midare. dar zamane motevaled shodanesh.
     */
    decrease = () => {
        console.log(this)
        this.setState({counter: this.state.counter - 1})
    };

    render() {
        // console.log(this.props)
        // this.props.defaultValue = 10
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                {/*<button onClick={this.increase.bind(this)}>+</button>*/}
                {/*<button onClick={() => this.increase()}>+</button>*/}
                {/*<button onClick={this.increase.bind(null, 'ali')}>+</button>*/}
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }

}


export default Counter
