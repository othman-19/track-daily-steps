/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, withRouter } from 'react-router-dom';
import { estimation, ProjectPerformance } from '../timeCounter';
import NewGoal from './NewGoal';

function Project({
  project: {
    id, name, description, start, end, start_time,
  },
}) {
  const performance = ProjectPerformance(start, end);
  const degree = (performance * 180) / 100;

  const circleStyle = {
    transform: `rotate(${degree}deg)`,
  };

  return (
    <div className="container project ">
      <h4 className="center startTime">
        <Link to={`/projects/${id}`} key={id}>
          Project:
          { name }
        </Link>
      </h4>
      <h5 className="startTime">
        { new Date(start).toDateString() }
        <span>
          at:
          { start_time }
        </span>
      </h5>
      <div className="container tracks">
        <div className="performance">
          <div className="tracktime">
            <h5 className="track">
              description:
              { description }
            </h5>
            <h5 className="track">
              End time:
              { end }
            </h5>
            <h5 className="track">
              Estimated time:
              { estimation(start, end) }
            </h5>

            <h5 className="">
              <Link to={`/newGoal/${id}`} key={Math.random()}>Add a new track</Link>
            </h5>
          </div>
        </div>
        <h5 className=" achievment track center">
          { ProjectPerformance(start, end) >= 100 ? <i className="fas fa-trophy icon-green" /> : <i className="fas fa-trophy" /> }
        </h5>
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
        <Route key={Math.random()} path="/newGoal/:projectId" component={NewGoal} />
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};
export default withRouter(Project);
