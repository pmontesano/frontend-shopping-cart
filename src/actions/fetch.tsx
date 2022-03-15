export const fetchInitialData = (data: any) => async (dispatch: Function) => {
  dispatch({ type: 'FETCH_PENDING' });
  try {
    dispatch({ type: 'FETCH_COMPLETE', payload: data });
  } catch (err: any) {
    dispatch({ type: 'FETCH_ERROR', error: err.message });
  }
};
