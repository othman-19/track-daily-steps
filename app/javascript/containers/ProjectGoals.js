import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../actions/index';
import Project from '../components/Project';
import Goal from '../components/Goal';

class ProjectGoals extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id : null,
      project: {},
      projectGoals: []
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`/api/projects/${id}`)
    .then(res => res.json())
    .then(data => this.setState({
      id: id,
      project: data[0],
      projectGoals: [...data[1]]
    }));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const id = this.props.match.params.id
      fetch(`/api/projects/${id}`)
        .then(res => res.json())
        .then(data => this.setState({
          id: id,
          project: data[0],
          projectGoals: [...data[1]]
    }));
    }
  }
  render() {
    let { projectGoals } = this.state
    projectGoals.map(goal => console.log(goal))
    projectGoals = projectGoals.map(goal => <Goal key={goal.id} goal={goal} />)
    return (
      <div>
        { projectGoals }
      </div>
    );
  }
}

export default ProjectGoals;
