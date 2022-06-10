import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        // tanha jai ke mishe state assign kard.
        this.state = {
            counter: 0,
            user: {}
        }
    }

    /**
     * kanale khubi vase baresi state ha va propsha
     */
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', state.counter)

        if (state.counter % 2 === 1) {
            return {
                counter: state.counter + 1
            }
        }

        return null
    }

    /**
     * component update beshe ya na, tasmismesh injast.
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldUpdate', nextState.counter)
        // if (nextState.counter % 4 === 0)
        //     return false;
        return true;
    }

    componentDidMount() {
        console.log('didMount')
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data =>this.setState({user: data}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didUpdate')
    }

    render() {
        console.log('render')
        console.log(this.state)
        return (
            <div>
                <h3>{this.state.user.name}</h3>
                <p>Coutner {this.state.counter}</p>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>increase</button>
            </div>
        );
    }
}

export default LifeCycle;
