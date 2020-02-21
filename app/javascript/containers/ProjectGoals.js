import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjectGoals } from '../actions/index';
import Goal from '../components/Goal';

class ProjectGoals extends Component {
  
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`/api/projects/${id}`)
    .then(res => res.json())
    .then(data => this.props.getProjectGoals(data[1]));
  }
  render() {
    let { projectGoals } = this.props
    projectGoals = projectGoals.map(goal => <Goal key={goal.id} goal={goal} />)
    return (
      < div >
        { projectGoals }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projectGoals: state.projectGoals,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getProjectGoals: projectGoals => dispatch(getProjectGoals(projectGoals)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectGoals);

