import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titles: this.props.titles
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.titles.map(title => {

                    })
                }
            </React.Fragment>
        );
    }
}

export default Header;
