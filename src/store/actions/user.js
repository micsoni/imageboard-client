import request from "superagent";

const baseUrl = "https://ancient-river-17271.herokuapp.com";
function makeLogin(loginData) {
  return {
    type: "JWT",
    payload: loginData
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: email, password: password })
    .then(response => {
      const action = makeLogin(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// const a = 1

// const b = { a: a }
// b.a === 1

// const c = { a }
// c.a === 1
