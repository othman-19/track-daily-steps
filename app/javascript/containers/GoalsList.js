import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGoals } from '../actions/index';
import Goal from '../components/Goal';

class GoalsList extends Component {
  componentDidMount() {
    const { getGoals } = this.props;
    fetch('/api/goals')
      .then(res => res.json())
      .then(data => getGoals(data));
  }

  render() {
    let { goals } = this.props;
    if (!goals[0]) {
      return (
        <div>
          <h2 className="center">
            You have no track, go to projects and define a one.
          </h2>
        </div>
      );
    }
    goals = goals ? goals.map(goal => <Goal key={goal.id} goal={goal} />) : <p>Goals loading</p>;
    return (
      <div>
        {goals}
      </div>
    );
  }
}
/* eslint react/prop-types: 0 */
/* eslint react/forbid-prop-types: 0 */

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  getGoals: PropTypes.func.isRequired,
  // id: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  goals: state.goals,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getGoals: goals => dispatch(getGoals(goals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
