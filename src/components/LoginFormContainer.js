import React from "react";
import LoginForm from "./LoginForm.js";
import { connect } from "react-redux";
import { login } from "../store/actions/user";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };
  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null, { login })(LoginFormContainer);