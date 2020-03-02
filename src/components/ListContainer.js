import React from "react";
import { getImages } from "../store/actions/images";
import { connect } from "react-redux";
import List from "./List.js";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (!this.props.images.length) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    const displayImages = this.props.images.map(image => {
      return <List url={image.url} title={image.title} key={image.id} />;
    });

    return <div>{displayImages}</div>;
  }
}
function mapStateToProps(state) {
  return { images: state.images.all };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
