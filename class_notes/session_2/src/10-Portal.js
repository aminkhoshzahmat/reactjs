import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class Portal extends Component
{
    state = {
        counter: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({counter: this.state.counter + 1})
        }, 1000)
    }

    render()
    {
        console.log(this.state.counter)
        const portal = document.getElementById('portal');
        return ReactDom.createPortal(
            <div>
                {this.state.counter}
            </div>,
            portal
        );
    }
}
