import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../actions/index';
import Project from '../components/Project';
import Goal from '../components/Goal';

class ProjectGoals extends Component {
  constructor () {
    super(props)
    this.state = {
      project: {},
      projectGoals: {}
    }
  }
  
  componentDidMount() {
    console.log('Iam ProjectGoals , I will mounte')
    id = this.props.id
    fetch(`/api/projects/${id}`)
    .then(res => res.json())
    .then(data => this.setState({
      project: data[0],
      projectGoals: data[1]
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
