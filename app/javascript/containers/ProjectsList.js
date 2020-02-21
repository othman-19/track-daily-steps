import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../actions/index';
import Project from '../components/Project';
import ProjectGoals from './ProjectGoals';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class ProjectsList extends Component {
  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => this.props.getProjects(data));
  }
  render() {
    let { projects } = this.props;
    if (projects) {
      projects =  projects.map(project => <Project key={project.id} project={project} />)
    }
    else {
      projects = <div> projects loading... </div>
    }
    return (
      <div>
        { projects }
        <Route key={Math.random()} path="/projects/:id" component={ProjectGoals}/>
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