export const fetchInitialData = (data) => async (dispatch) => {
  dispatch({ type: 'FETCH_PENDING' });
  try {
    dispatch({ type: 'FETCH_COMPLETE', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', error: err.message });
  }
};
