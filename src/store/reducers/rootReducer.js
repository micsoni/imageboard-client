import { combineReducers } from "redux";
import user from "./user";
import images from "./images";
export default combineReducers({
  images,
  user
});
