import React, {Component} from 'react';

export default class Users extends Component
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
                <ol>
                    {
                        this.state.users.map((user,index) => (
                            <User key={user.id} user={user}/>
                        ))
                    }
                </ol>
            </div>
        )
        // return <div>{['ali', 'goli']}</div>
        // return <div>{['Amin', 'John']}</div>
    }
}

class User extends Component {
    render() {
        const {user} = this.props;
        return <li> {user.name}</li>
    }
}

//
// export default class Users extends Component
// {
//     /**
//      * List midim jaye JSX
//      * soale mosahebei
//      *
//      * react nemifahe chetori biad react dom o diff begire, chon ye list behesh dadim, age yeki pak beshe amresho nadare,
//      * vase khdoesh halate adi key set mikone vase dom element ha, ama inja nemitune befahme chio dastkari kardim.
//      * be har list element ye key bede
//      */
//     render()
//     {
//         return <div>
//             {[<div key='1'>One</div>, <div key='2'>Two</div>, <div key='3'>Three</div>]}
//         </div>
//         // return <div>{['ali', 'goli']}</div>
//         // return <div>{['Amin', 'John']}</div>
//     }
// }

