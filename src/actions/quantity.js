export const increaseQty = (id, quantity) => async (dispatch) => {
  dispatch({ type: 'INCREASE_QUANTITY', payload: { id, quantity } });
};

export const decreaseQty = (id, quantity) => async (dispatch) => {
  dispatch({ type: 'DECREASE_QUANTITY', payload: { id, quantity } });
};

export const setQty = (id, quantity) => async (dispatch) => {
  dispatch({ type: 'SET_QUANTITY', payload: { id, quantity } });
};
