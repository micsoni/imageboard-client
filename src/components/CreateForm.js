import React, { Component } from "react";

export default class CreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={this.props.onChange}
              value={this.props.values.title}
            />
          </div>
          <div>
            <label>Url </label>
            <input
              type="text"
              name="url"
              onChange={this.props.onChange}
              value={this.props.values.url}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Save
        </button>
      </form>
    );
  }
}
