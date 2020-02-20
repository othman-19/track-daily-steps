import React from 'react';
import PropTypes from 'prop-types';

function Project({ project: { name, description, start, end, startTime, estimation, performance } }) {
  return (
    <div className = 'Project'>
      <ul>
        <li>name: { name }</li>
        <li>description: { description }</li>
        <li>Started: { start }</li>
        <li>Start time: { startTime }</li>
        <li>Will end: { end }</li>
        <li>Estimated time: { estimation }</li>
        <li>Performance: { performance }</li>
        <li>Achieved: { performance === 100 ? 'Achieved!' : 'Not yet!' }</li>
      </ul>
    </div>
  );
}

export default Project;