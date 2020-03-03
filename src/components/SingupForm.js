import React, { Component } from "react";

export default class SingupForm extends Component {
  render() {
    return (
      <div>
        <p>Not a member yet? Singup!</p>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group col-6">
            <label className="col-sm-2">Email</label>
            <input
              type="text"
              name="email"
              onChange={this.props.onChange}
              value={this.props.values.email}
            />
          </div>
          <div className="form-group col-6">
            <label className="col-sm-2">Password</label>
            <input
              type="text"
              name="password"
              onChange={this.props.onChange}
              value={this.props.values.password}
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Singup
          </button>
        </form>
      </div>
    );
  }
}
