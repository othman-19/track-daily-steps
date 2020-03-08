import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjectGoals } from '../actions/index';
import Goal from '../components/Goal';

class ProjectGoals extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    document.title = 'Project goals';
  }

  componentDidMount() {
    const { match: { params: { projectId } } } = this.props;
    const { getProjectGoals } = this.props;
    fetch(`/api/projects/${projectId}`)
      .then(res => res.json())
      .then(data => getProjectGoals(data.project_user_goals));
  }

  render() {
    let { projectGoals } = this.props;
    projectGoals = projectGoals.map(goal => <Goal key={goal.id} goal={goal} />);
    return (
      <div>
        { projectGoals }
      </div>
    );
  }
}

ProjectGoals.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  projectGoals: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  getProjectGoals: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  projectGoals: state.projectGoals,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getProjectGoals: projectGoals => dispatch(getProjectGoals(projectGoals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectGoals);
