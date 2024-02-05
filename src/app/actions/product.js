export const clearData = () => {
  return {
    type: "RESET_LOADER",
    payload: {}
  }
}

export const getProducts = (filters = {}) => {
  return {
    type: "GET_PRODUCTS",
    payload: {
      filters
    }
  }
}