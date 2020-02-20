import React from 'react';
import PropTypes from 'prop-types';

const performance = (start, end) => {
  return end? (start-Time.now)/(start-self) * 100 : 0
}
    
function Goal({ goal: { description, start, achieved, end, startTime, estimation } }) {
  return (
    <div className = 'Goal'>
      <ul>
        <li>description: { description }</li>
        <li>Started: { start }</li>
        <li>Start time: { startTime }</li>
        <li>Will end: { end ? end : 'Not selected'}</li>
        <li>Estimated time: { estimation }</li>
        <li>Performance: { performance(start, end) }</li>
        <li>Achieved: { achieved? 'Achieved!' : 'Not yet!' }</li>
      </ul>
    </div>
  );
}

export default Goal;