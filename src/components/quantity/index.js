import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty } from '../../actions/quantity';

const Quantity = ({ className, id, quantity }) => {
  const dispatch = useDispatch();

  const initialState = useSelector((state) => state);

  const { qty, available_qty: availableQuantity } = quantity;

  console.log('initialState', initialState.products);

  return (
    <div className={className}>
      <button
        disabled={qty === 1}
        className='count'
        onClick={() => dispatch(decreaseQty(id))}
      >
        -
      </button>
      <input type='text' className='product-quantity' value={qty} />
      <button
        disabled={qty === availableQuantity}
        className='count'
        onClick={() => dispatch(increaseQty(id))}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
