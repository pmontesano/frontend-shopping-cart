export const getProduts = (data: any) => async (dispatch: Function) => {
  dispatch({ type: 'PRODUCTS_COMPLETE', payload: data });
};
