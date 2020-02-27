import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Route } from 'react-router-dom';
// import ProjectGoals from './ProjectGoals';
import { getProjects } from '../actions/index';
import Project from '../components/Project';

class ProjectsList extends Component {
  componentDidMount() {
    const { getProjects } = this.props;
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => getProjects(data));
  }

  render() {
    let { projects } = this.props;
    projects = projects
      ? projects.map(project => <Project key={project.id} project={project} />)
      : (
        <h3 className="center">
          You have no projects, click on New to create one.
        </h3>
      );
    return (
      <div>
        { projects }
        {/* <Route key={Math.random()} path="/projects/:projectId" component={ProjectGoals} /> */}
      </div>
    );
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  projects: state.projects,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getProjects: projects => dispatch(getProjects(projects)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
