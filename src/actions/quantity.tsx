export const increaseQty = (id: string) => async (dispatch: Function) => {
  dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
};

export const decreaseQty = (id: string) => async (dispatch: Function) => {
  dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
};

export const setQty = (id: string) => async (dispatch: Function) => {
  dispatch({ type: 'SET_QUANTITY', payload: { id } });
};
