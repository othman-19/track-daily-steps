import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      start: '',
      end: '',
      projectId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    document.title = 'New Track';
  }

  handleChange(e) {
    let { match: { params: { projectId } } } = this.props;
    projectId = Number(projectId);
    this.setState({
      projectId,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      description, start, end, projectId,
    } = { ...this.state };
    fetch('/api/goals', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        description,
        start,
        end,
        project_id: projectId,
      }),
    }).then(res => res.json());

    this.setState({
      description: '',
      start: '',
      end: '',
      user_id: '',
      projectId: '',
    });
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { description, start, end } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="books-form">
          <div className="container">
            <h3>Create a new Track</h3>
            <h5>Goal description</h5>
            <textarea
              name="description"
              id="description"
              value={description}
              required
              onChange={this.handleChange}
              placeholder="Goal description"
            />
            <br />
            <h5>Set start date and time</h5>
            <input
              type="datetime-local"
              name="start"
              id="start"
              value={start}
              required
              onChange={this.handleChange}
            />
            <br />
            <h5>Set end date and time</h5>
            <input
              type="datetime-local"
              name="end"
              id="end"
              value={end}
              required
              onChange={this.handleChange}
            />
            <br />
            <button className="submitBtn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

GoalsForm.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GoalsForm;
