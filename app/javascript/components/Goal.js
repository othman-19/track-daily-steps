import React from 'react';
import PropTypes from 'prop-types';
import { estimation, workedTime, GoalPerformance} from '../timeCounter'
    
function Goal({ goal: { description, start, end, startTime } }) {
  return (
    <div className="container goal">
      <h5 className='center startTime'>{ new Date(start).toDateString() } <span>at: { startTime }</span></h5>
      <div className='container tracks'>
        <div className='performance'>
          <div className="clearfix">
            <div className="c100 p12 small">
                <span>{ GoalPerformance(start, end) }%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
          </div>
        </div>
        <div className='center tracktime'>
          <h5 className="track"> { GoalPerformance(start, end) >= 100 ? <i className="fas fa-trophy icon-green"></i> : <i className="fas fa-trophy"></i> }</h5>
          <h5 className="track">description: { description }</h5>
        </div>
      </div>
    </div>
  );
}

export default Goal;