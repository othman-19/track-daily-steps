import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjectGoals } from '../actions/index';
import Goal from '../components/Goal';

class ProjectGoals extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getProjectGoals } = this.props;
    fetch(`/api/projects/${id}`)
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
  id: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
  projectGoals: PropTypes.func.isRequired,
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
