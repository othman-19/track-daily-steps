import React, { Component } from 'react';

class Goal extends Component {
  render() {
    return (
      <div>
        <p>{this.props.goal.description}</p>
      </div>
    );
  }
}

export default Goal;