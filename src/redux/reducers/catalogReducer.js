// TODO: isLoaded false - show animation

const initialState = {
  items: [],
  isLoaded: false,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATALOG":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default catalogReducer;
