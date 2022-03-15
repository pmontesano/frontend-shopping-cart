import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty } from '../../actions/quantity';

interface QuantityProps {
  id: string;
  quantity: any;
}

const Quantity = ({ id, quantity }: QuantityProps) => {
  const dispatch = useDispatch();

  const { qty, available_qty: availableQuantity } = quantity;

  return (
    <div>
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
