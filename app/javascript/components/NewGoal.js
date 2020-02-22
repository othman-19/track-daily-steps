import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      start: '',
      end:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const projectId = Number(this.props.match.params.projectId);
    this.setState({
      project_id: projectId,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { description, start, end, project_id } = { ...this.state };
    fetch('/api/goals', {
      method: 'POST',
      headers : {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body:JSON.stringify({
        description: description,
        start: start,
        end: end,
        project_id: project_id,
      })
    }).then((res) => res.json())
      .then((data) =>  console.log(data));

    this.setState({
     description: '',
      start: '',
      end:'',
      user_id: '',
      projectId: '',
    });
    this.props.history.push('/');
  }
  render() {
    const { description, start, end } = this.state;
    return (
      <div className="form-listing">
        <h3 className="add-book">Create a new Goal</h3>
        <form onSubmit={this.handleSubmit} className="books-form">
          <textarea
            name="description"
            id="description"
            value={description}
            required
            onChange={this.handleChange}
            placeholder="Goal description"
          /><br/>
          <input
            type="datetime-local"
            name="start"
            id="start"
            value={start}
            required
            onChange={this.handleChange}
            placeholder="Goal start time"
          /><br/>
          <input
            type="datetime-local"
            name="end"
            id="end"
            value={end}
            required
            onChange={this.handleChange}
            placeholder="Goal start time"
          /><br/>
          <button className="Rectangle-2" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GoalsForm;