const initialState = {
  filter: "All",
  sortBy: "popular",
};

const catalogBarReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default catalogBarReducer;
