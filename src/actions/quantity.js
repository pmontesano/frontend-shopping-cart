export const increaseQty = (id) => async (dispatch) => {
  dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
};

export const decreaseQty = (id) => async (dispatch) => {
  dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
};
