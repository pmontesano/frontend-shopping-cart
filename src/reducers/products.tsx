import {
  PRODUCTS_COMPLETE,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_QUANTITY,
} from '../actions/types';

const initialState = {
  productsList: [],
  loading: false,
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCTS_COMPLETE:
      return {
        ...state,
        productsList: [...action.payload],
        loading: false,
      };
    case INCREASE_QUANTITY:
      if (
        state.productsList.find(
          (product: any) => product.id === action.payload.id
        )
      ) {
        const items = state.productsList.map((x: any) =>
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
      break;

    case DECREASE_QUANTITY:
      if (
        state.productsList.find(
          (product: any) => product.id === action.payload.id
        )
      ) {
        const items = state.productsList.map((x: any) =>
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
      break;

    case SET_QUANTITY:
      if (
        state.productsList.find(
          (product: any) => product.id === action.payload.id
        )
      ) {
        const items = state.productsList.map((x: any) => {
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
      break;

    default:
      return state;
  }
};
