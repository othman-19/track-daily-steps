import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../actions/index';
import Project from '../components/Project';

class ProjectsList extends Component {
  componentDidMount() {
    console.log('Iam Projects , I am in mounted')
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => this.props.getProjects(data));
  }
  render() {
    let { projects } = this.props;
    projects.map(project => console.log(project) ) 
    if (projects) {
      projects =  projects.map(project => <Project key={project.id} project={project} />)
    }
    else {
      projects = <div> projects loading... </div>
    }
    return (
      <div>
        { projects }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getProjects: projects => dispatch(getProjects(projects)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);