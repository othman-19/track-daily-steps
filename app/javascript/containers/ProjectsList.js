import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    if (!projects[0].name) {
      return (
        <div>
          <h2 className="center">
            You have no projects, click on New to create one.
          </h2>
        </div>
      );
    }
    if (projects) {
      projects = projects.map(project => <Project key={project.id} project={project} />);
    } else {
      projects = <div> projects loading... </div>;
    }
    return (
      <div>
        { projects }
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
