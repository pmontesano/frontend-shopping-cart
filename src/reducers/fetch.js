import {
  FETCH_START,
  FETCH_COMPLETE,
  FETCH_PENDING,
  FETCH_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case FETCH_PENDING:
      return { ...state, loading: true };
    case FETCH_COMPLETE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
      };
    default:
      return state;
  }
};
