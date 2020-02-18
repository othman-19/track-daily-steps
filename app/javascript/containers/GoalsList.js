import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGoals } from '../actions/index';
import Goal from '../components/Goal';

class GoalsList extends Component {
  componentDidMount() {
    fetch('Goals')
      .then(res => res.json())
      .then(data => this.props.getGoals(data));
  }

  render() {
    const goals = (this.props.goals) ? this.props.goals.map(goal => <Goal goal={gaol} key={goal.id} />) : <p>Goals loading</p>;
    return (
      <div>
        {goals}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  goals: state.goals,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getTalks: goals => dispatch(getGoals(goals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);