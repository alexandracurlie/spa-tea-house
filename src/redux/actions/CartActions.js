export const addItemToCart = (item) => ({
  type: "ADD_ITEM_TO_CART",
  payload: item,
});

export const decreaseCount = (id) => ({
  type: "DECREASE_THE_NUMBER_OF_ITEMS",
  payload: id,
});

export const removeItemFromCart = (id) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
