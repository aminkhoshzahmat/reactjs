import React, {Component} from 'react';
import Table from "./shared/table/Table";

class UsersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/userss')
            .then(response => response.json())
            .then(data => this.setState({
                users: data,
                isLoaded: true
            }))
    }

    render() {
        return (
            <React.Fragment>
                <h2>List of users</h2>
                <Table items={this.state.users}/>
            </React.Fragment>
        );
    }
}

export default UsersList;
