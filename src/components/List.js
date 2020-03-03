import React, { Component } from "react";

export default class List extends Component {
  render() {
    const displayImages = this.props.images.map(image => {
      return (
        <div key={image.id}>
          <h3>{image.title}</h3>
          <img src={image.url} alt="" />
        </div>
      );
    });

    return <div>{displayImages}</div>;
  }
}
