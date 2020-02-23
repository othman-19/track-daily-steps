import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewGoal from './NewGoal'
import ProjectGoals from '../containers/ProjectGoals'
import { estimation, ProjectPerformance} from '../timeCounter';

function Project({ project: { id ,name, description, start, end, startTime} }) {
  return (
    <div className ="container project ">
      <h4 className='center startTime'><Link to={`/projects/${id}`} key={id}>Project: { name }</Link></h4>
      <h5 className='startTime'>{ new Date(start).toDateString() } <span>at: { startTime }</span></h5>
      <div className='container tracks'>
        <div className='performance'>
          <div className='tracktime'>
            <h5 className="track">description: { description }</h5>
            <h5 className="track">End time: { end }</h5>
            <h5 className="track">Estimated time: { estimation(start, end) }</h5>
            <h5 className="track"> { ProjectPerformance(start, end) >= 100 ? <i className="fas fa-trophy icon-green"></i> : <i className="fas fa-trophy"></i> }</h5>
            <h5 className=""><Link to={`/newGoal/${id}`} key={Math.random()}>Add a new goal</Link></h5>
          </div>
        </div>
        <div className="">
            <div className="c100 p12 small">
                <span>{ ProjectPerformance(start, end) }%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
          </div>
        
        {/* <Route key={Math.random()} path={'/newGoal/:projectId'} component={NewGoal}/> */}
      </div>
      <Route key={Math.random()} path={'/projects/:id'} component={ProjectGoals}/>
    </div>
  );
}

export default withRouter(Project);
