import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
      currentUser: null,
    };
  }

  componentDidMount() {
    fetch('users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data[0],
          currentUser: data[1],
        });
      });
  }

  render() {
    let { users } = this.state;
    const { currentUser } = this.state;
    users = users ? users.map(user => (
      <div key={user.id}>
        <p>{user.email}</p>
      </div>
    )) : <p>No users yet...</p>;
    return (
      <div>
        {users}
        { currentUser
          ? (
            <h3>
              current user:
              {currentUser.email}
            </h3>
          )
          : 'No'}
      </div>
    );
  }
}

export default Users;
