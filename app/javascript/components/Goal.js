/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { GoalPerformance } from '../timeCounter';

function Goal({
  goal: {
    description, start, end, start_time,
  },
}) {
  const performance = GoalPerformance(start, end);
  const degree = (performance * 180) / 100;

  const circleStyle = {
    transform: `rotate(${degree}deg)`,
  };

  return (
    <div className="container goal">
      <h5 className="center startTime">
        { new Date(start).toDateString() }
        <span>
          <span className="">at:</span>
          { start_time }
        </span>
      </h5>
      <div className="container tracks">
        <div className="performance">
          <div className="clearfix">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full" style={circleStyle}>
                  <div className="fill" style={circleStyle} />
                </div>
                <div className="mask half">
                  <div className="fill" style={circleStyle} />
                </div>
                <div className="inside-circle">
                  {performance}
                  %
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right tracktime container">
          <h5 className="track">
            { performance >= 100 ? <i className="fas fa-trophy icon-green" /> : <i className="fas fa-trophy" /> }
          </h5>
          <h5 className="track">
            <span className="">description:</span>
            { description }
          </h5>
        </div>
      </div>
    </div>
  );
}

Goal.propTypes = {
  goal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default Goal;
