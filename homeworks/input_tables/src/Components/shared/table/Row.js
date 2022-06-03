import React, {Component} from 'react';
import Header from "./Header";

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
    }

    render() {
        const titles = Object.keys(this.state.items[0]);
        console.log(titles, 'Row')
        return (
            <>
                <thead>
                <tr>
                    {
                        titles.map((title, index) => (
                            <th>{title}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>data here</td>
                </tr>
                </tbody>
            </>
        );
    }
}

export default Row;
