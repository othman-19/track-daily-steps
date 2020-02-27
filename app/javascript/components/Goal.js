/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { GoalPerformance } from '../timeCounter';

function Goal({
  goal: {
    description, start, end, start_time,
  },
}) {
  return (
    <div className="container goal">
      <h5 className="center startTime">
        { new Date(start).toDateString() }
        <span>
          <span className="title">at:</span>
          { start_time }
        </span>
      </h5>
      <div className="container tracks">
        <div className="performance">
          <div className="clearfix">
            <div className="c100 p12 small">
              <span>
                { GoalPerformance(start, end) }
                %
              </span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="right tracktime container">
          <h5 className="track">
            { GoalPerformance(start, end) >= 100 ? <i className="fas fa-trophy icon-green" /> : <i className="fas fa-trophy" /> }
          </h5>
          <h5 className="track">
            <span className="title">description:</span>
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
