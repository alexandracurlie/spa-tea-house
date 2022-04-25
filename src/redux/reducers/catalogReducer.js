// TODO: isLoaded false - show animation

const initialState = {
  items: [],
  filter: "All",
  sortBy: "popular",
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

export default catalogReducer;
