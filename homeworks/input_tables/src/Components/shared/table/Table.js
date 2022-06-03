import React, {Component} from 'react';
import Row from "./Row"

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        }

    }

    render() {
        // const titles = Object.keys(this.props.items);
        console.log(this.props.items, 'Row')
        return (
            <table>
                <thead>
                <tr>
                    <th>d</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>data here</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
