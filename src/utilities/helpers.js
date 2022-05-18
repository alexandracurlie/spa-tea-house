
export const makeSize = (props, styles) => {
  switch (props) {
    case "s": return styles.sizeS
    case "m": return styles.sizeM
    case "l": return styles.sizeL
    default: return styles.sizeL
  }
}

export const countItems = (items, id) => items.filter(good => good.id === id).length

export const getTotalPrice = (items) => items.reduce((acc, item) => acc + item.price, 0)

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

export const filterItems = (items, filter) =>
    items.filter((item) => filter === "All" ? item : item.type === filter);

export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0
}

export const capitalize = (value) => {
  const array = value.split(' ')

  return array.map(item => {
    const [first, ...rest] = item
    return first.toUpperCase() + rest.join('')
  })
}
