const initialState = { all: [] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_IMAGES": {
      return {
        ...state,
        all: action.payload
      };
    }
    default:
      return state;
  }
}
