import React from 'react';
import PropTypes from 'prop-types';
import { workedTime, GoalPerformance} from '../timeCounter'
    
function Goal({ goal: { description, start, achieved, end, startTime, estimation } }) {
  return (
    <div className = 'Goal'>
      <ul>
        <li>description: { description }</li>
        <li>Started: { new Date(start).toDateString() }</li>
        <li>Start time: { startTime }</li>
        <li>Will end: { end ? end : 'Not selected'}</li>
        <li>Estimated time: { estimation }</li>
        <li>Worked time: { workedTime(start) }</li>
        <li>Performance: { GoalPerformance(start, end) }</li>
        <li>Achieved: { achieved? 'Achieved!' : 'Not yet!' }</li>
      </ul>
    </div>
  );
}

export default Goal;