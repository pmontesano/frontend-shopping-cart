import {
  PRODUCTS_DATA,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_QUANTITY,
} from '../actions/types';

const initialState = {
  productsList: [],
  loading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_DATA:
      return {
        ...state,
        productsList: [...action.payload],
        loading: false,
      };
    case INCREASE_QUANTITY:
      if (
        state.productsList.find((product) => product.id === action.payload.id)
      ) {
        const items = state.productsList.map((x) =>
          x.id === action.payload.id
            ? {
                ...x,
                quantity: {
                  ...x.quantity,
                  qty: x.quantity.qty + 1,
                },
              }
            : x
        );

        return {
          ...state,
          productsList: [...items],
          loading: false,
        };
      }
    case DECREASE_QUANTITY:
      if (
        state.productsList.find((product) => product.id === action.payload.id)
      ) {
        const items = state.productsList.map((x) =>
          x.id === action.payload.id
            ? {
                ...x,
                quantity: {
                  ...x.quantity,
                  qty: x.quantity.qty - 1,
                },
              }
            : x
        );

        return {
          ...state,
          productsList: [...items],
          loading: false,
        };
      }

    case SET_QUANTITY:
      if (
        state.productsList.find((product) => product.id === action.payload.id)
      ) {
        const items = state.productsList.map((x) => {
          x.id === action.payload.id
            ? {
                ...x,
                quantity: {
                  ...x.quantity,
                  qty: action.payload.quantity,
                },
              }
            : x;
        });

        return {
          ...state,
          productsList: [...items],
          loading: false,
        };
      }

    default:
      return state;
  }
};
