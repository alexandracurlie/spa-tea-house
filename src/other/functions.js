import _ from "lodash";

export const sortItems = (items, sortBy) => {
  switch (sortBy) {
    case "expensive":
      return items.sort((item1, item2) => item2.price - item1.price);
    case "cheap":
      return items.sort((item1, item2) => item1.price - item2.price);
    default:
      return items;
  }
};

export const filterItems = (items, filter) => {
  return items.filter((item) =>
    filter === "All" ? item : item.type === filter
  );
};


// possible argument Array or Object

export const getTotalAmount = (cart) => {
  if (Array.isArray(cart)) {
    return cart.reduce((acc, item) => acc + item.price, 0);
  } else if (_.isObject(cart)) {
    return Object.values(cart).reduce((acc, obj) => {
      const value = _.get(obj, "totalPrice");
      return acc + value;
    }, 0);
  }
};
