import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      start: '',
      end: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      name, description, start, end,
    } = { ...this.state };
    fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        start,
        end,
      }),
    }).then(res => res.json());

    this.setState({
      name: '',
      description: '',
      start: '',
      end: '',
    });
    const { history } = this.props;
    history.push('/projects');
  }

  render() {
    const {
      name, description, start, end,
    } = this.state;
    return (
      <div className="">
        <form onSubmit={this.handleSubmit} className="books-form">
          <div className="container">
            <h3>Create a new Project</h3>
            <h5>Set project name</h5>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={this.handleChange}
              placeholder="Project Title"
            />
            <br />
            <h5>Set project description</h5>
            <textarea
              name="description"
              id="description"
              value={description}
              required
              onChange={this.handleChange}
              placeholder="Project description"
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

ProjectsForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProjectsForm;
