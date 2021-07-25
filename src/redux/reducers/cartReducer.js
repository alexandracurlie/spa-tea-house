import { getTotalAmount } from "../../other/functions";

// TODO: create totalItems for cart badge in header

const initialState = {
  items: {},
  totalCartCost: 0,
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newState = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalAmount(currentItems),
        },
      };

      return {
        ...state,
        items: newState,
        totalCartCost: getTotalAmount(newState),
      };
    }

    case "DECREASE_THE_NUMBER_OF_ITEMS": {
      const currentItems = state.items[action.payload].items;

      const newItems =
        currentItems.length > 0 ? currentItems.slice(1) : currentItems;

      const newState = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalAmount(newItems),
        },
      };

      if (newState[action.payload].items.length === 0) {
        delete newState[action.payload];
      }

      return {
        ...state,
        items: newState,
        totalCartCost: getTotalAmount(newState),
      };
    }

    case "REMOVE_ITEM_FROM_CART":
      const newItems = {
        ...state.items,
      };

      const newCartCost = state.totalCartCost - newItems[action.payload].totalPrice

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalCartCost: newCartCost
      };

    case "CLEAR_CART":
      return {
        items: {},
        totalCartCost: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
