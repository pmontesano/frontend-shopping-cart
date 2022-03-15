import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, setQty } from '../../actions/quantity';

const Quantity = ({ className, id, quantity }) => {
  const dispatch = useDispatch();

  const { qty, available_qty: availableQuantity } = quantity;

  return (
    <div className={className}>
      <button
        disabled={qty === 1}
        className='count'
        onClick={() => dispatch(decreaseQty(id))}
      >
        -
      </button>
      <input type='number' className='product-quantity' value={qty} readOnly />
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
