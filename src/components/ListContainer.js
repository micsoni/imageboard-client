import React from "react";
import { getImages } from "../store/actions/images";
import { connect } from "react-redux";
import List from "./List.js";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SingupFormContainer from "./SingupFormContainer";
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

    if (!this.props.userLoggedIn) {
      return (
        <div>
          <div>
            <LoginFormContainer />
          </div>
          <div>Not a member yet? Singup!</div>
          <div>
            <SingupFormContainer />
          </div>
          <div>{displayImages}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <CreateFormContainer />
          </div>
          <div>{displayImages}</div>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return { images: state.images.all, userLoggedIn: state.user };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
