import React ,{ component }from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';


const ProjectPerformance = (startTime, endTime) => {
  const start = new Date(startTime).getTime()
  const end = new Date(endTime).getTime()
  const now = Date.now()
  let time = (now-start)/(end-start)
  time = Math.floor(time * 100)
  return time
}

function Project({ project: { id ,name, description, start, end, startTime, estimation } }) {
  return (
    <div className = 'Project'>
      <ul>
        <Link to={`/projects/${id}`} key={id}><li>name: { name }</li></Link>
        <li>description: { description }</li>
        <li>Started: { new Date(start).toDateString() }</li>
        <li>Start time: { startTime }</li>
        <li>Will end: { end }</li>
        <li>Estimated time: { estimation }</li>
        <li>Performance: { ProjectPerformance(start, end) } %</li>
        <li>Achieved: { ProjectPerformance(start, end) >= 100 ? 'Achieved!' : 'Not yet!' }</li>
      </ul>
    </div>
  );
}

export default withRouter(Project);
