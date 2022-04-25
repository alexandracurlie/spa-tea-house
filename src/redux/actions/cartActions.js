
export const addItemToCart = (item) => ({
  type: "ADD_ITEM_TO_CART",
  payload: item,
});

export const decreaseCount = (id) => ({
  type: "DECREASE",
  payload: id,
});

export const removeItemFromCart = (id) => ({
  type: "REMOVE_ITEM",
  payload: id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
