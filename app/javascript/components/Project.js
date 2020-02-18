import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div>
        <p>{this.props.project.name}</p>
      </div>
    );
  }
}

export default Goal;