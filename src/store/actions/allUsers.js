import request from "superagent";

const baseUrl = "https://ancient-river-17271.herokuapp.com";

function getallUsers(userData) {
  return {
    type: "ALL_USERS",
    payload: userData
  };
}

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const { allUsers } = state;
  console.log(allUsers);
  if (!allUsers.all.length) {
    request
      .get(`${baseUrl}/user`)
      .then(response => {
        const action = getallUsers(response.body);
        console.log("HELLO",response.body)
        dispatch(action);
      })
      .catch(console.error);
  }
};


// function newImage(newImageData) {
//   return {
//     type: "NEW_IMAGE",
//     payload: newImageData
//   };
// }

// export const createImage = data => (dispatch, getState) => {
//   const state = getState();

//   const { user } = state;
//   console.log(user);

//   request
//     .post(`${baseUrl}/images`)
//     .set("Authorization", `Bearer ${user.jwt}`)
//     .send(data)
//     .then(response => {
//       const action = newImage(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };
