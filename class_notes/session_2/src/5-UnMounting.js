import React, {Component} from 'react';

export default  class Parent extends React.Component
{
    state = {mount: true}

    render()
    {
        return (
            <div>
                <button onClick={() => this.setState({mount: !this.state.mount})}>{this.state.mount ? 'Unmount' : 'Mount'}</button>
                {this.state.mount && <Child/>}
            </div>
        );
    }
}
class Child extends React.Component
{
    state = {
        counter: 0
    }

    /**
     * tu noskhehaye ghabli, yani 17, 16,... bayad ghable inke unmount konim, subscription haro cancel konim,
     * mesle interval. taskaro cancel konim va jologiri az memory lick konim.
     */
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({counter: this.state.counter + 1 })
        }, 1000)
    }

    /**
     * noskhe 18 be ghable lazeme
     */
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render()
    {
        return (
            <div>
                Child: {this.state.counter}
            </div>
        );
    }
}
