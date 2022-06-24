import React, {Component} from 'react';

export default class Title extends Component
{

    /**
     * Ya pain bade class set konid.
     */
    static defaultProps = {
    color: 'purple',
    name: 'Your name here'
}

    render()
    {
        return (
            <div>
                <h1 style={{color: this.props.color}} >{this.props.name}</h1>
            </div>
        );
    }
}
//
// Title.defaultProps = {
//     color: 'purple',
//     name: 'Your name here'
// }
