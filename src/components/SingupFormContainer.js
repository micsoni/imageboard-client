import React from "react";
import SingupForm from "./SingupForm";
import { connect } from "react-redux";
import { singup} from "../store/actions/user";

class SingupFormContainer extends React.Component {
  state = { email: "", password: "" };
  onSubmit = event => {
    event.preventDefault();
    this.props.singup(this.state.email, this.state.password);
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
         <div>Not a member yet? Singup!</div>
         <SingupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
      </div>
     
    );
  }
}
export default connect(null, { singup })(SingupFormContainer);
