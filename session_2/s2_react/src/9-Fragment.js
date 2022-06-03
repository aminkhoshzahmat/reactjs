import React, {Component} from "react";

export default class Frg extends Component
{
    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({users: data}))
    }

    /**
     * az index aslan vase key estefade nakonid
     * hamishe az samte back ye field unique begirid
     * @returns {JSX.Element}
     */
    render()
    {
        return (
            <div>
                <table border='1'>
                    {
                        this.state.users.map(user => (
                            <tr key={user.id}>
                                <Columns user={user}/>
                            </tr>
                        ))
                    }
                </table>
            </div>
        )

    }
}

/**
 * React.Fragment ya <></> vase wrap kardan component hai ke return ye element nist, chandtast.
 */
class Columns extends Component {
    render() {
        const {user} = this.props;

        return (
            <React.Fragment>
                <td>{user.id}</td>
                <td>{user.name}</td>
            </React.Fragment>
        )
    }
}



// class Columns extends Component {
//     render() {
//         const {user} = this.props;
//
//         return (
//             <>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//             </>
//         )
//     }
// }
