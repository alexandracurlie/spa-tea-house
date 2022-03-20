
export const makeSize = (props, styles) => {
  switch (props) {
    case "s": return styles.sizeS
    case "m": return styles.sizeM
    case "l": return styles.sizeL
    default: return styles.sizeL
  }
}
