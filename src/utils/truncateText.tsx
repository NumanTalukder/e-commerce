export const truncateText = (str: String) => {
  if (str.length < 25) {
    return str
  } else {
    return str.substring(0, 25) + '...'
  }
}
