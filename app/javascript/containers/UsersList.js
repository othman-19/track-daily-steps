import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
      current_user: null,
    };
  }

  componentDidMount() {
    // fetch('users')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       users: data[0],
    //       current_user: data[1],
    //     });
    //   });
  }

  render() {

    const users = this.state.users ? this.state.users.map(user => {
      return (<div key={user.id}>
        <p>{user.email}</p>
      </div>);
    }) : <p>No users yet...</p>
    return (
      <div>
        {users}
        { this.state.current_user ? <h3>current user: {this.state.current_user.email}</h3> : 'boo'}
      </div>
    );
  }
}

export default Users;