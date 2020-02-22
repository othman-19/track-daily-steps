import React from 'react';
import PropTypes from 'prop-types';
import { estimation, workedTime, GoalPerformance} from '../timeCounter'
    
function Goal({ goal: { description, start, achieved, end, startTime } }) {
  return (
    <div className = 'Goal'>
      <ul>
        <li>description: { description }</li>
        <li>Started: { new Date(start).toDateString() }</li>
        <li>Start time: { startTime }</li>
        <li>Will end: { end ? end : 'Not selected'}</li>
        <li>Estimated time: { estimation(start, end) }</li>
        <li>Worked time: { workedTime(start, end) }</li>
        <li>Performance: { GoalPerformance(start, end) } %</li>
        <li>Achieved: { GoalPerformance(start, end) >= 100 ? 'Achieved!' : 'Not yet!' }</li>
      </ul>
    </div>
  );
}

export default Goal;