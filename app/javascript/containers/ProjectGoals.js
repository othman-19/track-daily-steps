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
      id : props.match.params.id,
      project: {},
      projectGoals: []
    }
  }
  componentDidMount() {
    const id = this.state.id;
    fetch(`/api/projects/${id}`)
    .then(res => res.json())
    .then(data => this.setState({
      id: id,
      project: data[0],
      projectGoals: [...data[1]]
    }));
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

// const mapStateToProps = state => ({
//   projects: state.projects,
//   current_user: state.current_user,
// });

// const mapDispatchToProps = dispatch => ({
//   getProjects: projects => dispatch(getProjects(projects)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
export default ProjectGoals;
