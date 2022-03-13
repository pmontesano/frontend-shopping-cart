export const getProduts = (data) => async (dispatch) => {
  dispatch({ type: 'PRODUCTS_DATA', payload: data });
};
