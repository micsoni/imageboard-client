import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.url} />
      </div>
    );
  }
}
