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
        const titles = Object.keys(this.props.items[0]);
        console.log(titles, 'Row')
        return (
            <table>
                <thead>
                <tr>
                    {
                        titles.map(title => (
                            <th key={title}>{title}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <tr>
                    d
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
