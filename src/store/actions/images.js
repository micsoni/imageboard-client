import request from "superagent";

const baseUrl = "http://localhost:4000";
function allImages(imageData) {
  return {
    type: "ALL_IMAGES",
    payload: imageData
  };
}
export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.all.length) {
    request(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        console.log(action);
        dispatch(action);
      })
      .catch(console.error);
  }
};
