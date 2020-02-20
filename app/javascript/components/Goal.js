import React from 'react';
import PropTypes from 'prop-types';
const workedTime  = (startTime) => {
  let d, h, m, s;
  const start = new Date(startTime).getTime()
  const now = Date.now()
  const ms = now-start
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  h += d * 24;
  return `${h} h : ${m} m : ${s} s`;
}
const GoalPerformance = (startTime, endTime) => {
  if (endTime){
    const start = new Date(startTime).getTime()
    const end = new Date(endTime).getTime()
    const now = Date.now()
    let time = (now-start)/(end-start)
    time = Math.floor(time * 100)
    return time
  }
  return 'No end time for this goal'
}
    
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