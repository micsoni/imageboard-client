import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
<div>
  <div>
    <label>Email</label>
    <input
      type="text"
      name="email"
      onChange={this.props.onChange}
      value={this.props.values.email}
    />
  </div>
  <div>
    <label>Password</label>
    <input
      type="text"
      name="password"
      onChange={this.props.onChange}
      value={this.props.values.password}
    />
  </div>
</div>
<button type="submit" className="btn btn-dark">
 Login
</button>
</form>
      </div>
    )
  }
}


