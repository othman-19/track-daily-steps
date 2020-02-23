import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      start: '',
      end:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, description, start, end } = { ...this.state };
    console.log (name, description, start, end)
    fetch('/api/projects', {
      method: 'POST',
      headers : {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body:JSON.stringify({
        name: name,
        description: description,
        start: start,
        end: end
      })
    }).then((res) => res.json())
      .then((data) =>  console.log(data));

    this.setState({ name: '',
     description: '',
      start: '',
      end:'' });

      this.props.history.push('/projects');
    }

  render() {
    const { name, description, start, end } = this.state;
    return (
      <div className="">
        <h3 className="center">Create a new Project</h3>
        <form onSubmit={this.handleSubmit} className="books-form">
          <div class="container">
            <h5>Set project name</h5>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={this.handleChange}
              placeholder="Project Title"
            /><br/>
            <h5>Set project description</h5>
            <textarea
              name="description"
              id="description"
              value={description}
              required
              onChange={this.handleChange}
              placeholder="Project description"
            /><br/>
            <h5>Set start date and time</h5>
            <input
              type="datetime-local"
              name="start"
              id="start"
              value={start}
              required
              onChange={this.handleChange}
            /><br/>
            <h5>Set end date and time</h5>
            <input
              type="datetime-local"
              name="end"
              id="end"
              value={end}
              required
              onChange={this.handleChange}
            /><br/>
            <button className="submitBtn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectsForm;