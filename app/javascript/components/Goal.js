import React from 'react';
import PropTypes from 'prop-types';

function Goal({ goal: { description, start, achieved, end, startTime, estimation } }) {
  return (
    <div className = 'Goal'>
      <ul>
        <li>description: { description }</li>
        <li>Started: { start }</li>
        <li>Start time: { startTime }</li>
        <li>Will end: { end ? end : 'Not selected'}</li>
        <li>Estimated time: { estimation }</li>
        <li>Achieved: { achieved? 'Achieved!' : 'Not yet!' }</li>
      </ul>
    </div>
  );
}

export default Goal;