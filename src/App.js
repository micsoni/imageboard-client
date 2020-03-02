import React, { Component } from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import ListContainer from "./components/ListContainer";
import {Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Route exact path="/" component={ListContainer}/>
      </Provider>
    );
  }
}
export default App;
