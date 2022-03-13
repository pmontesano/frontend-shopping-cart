import React from 'react';

const Price = ({ amount, currency, className }) => {
  return (
    <div className={className}>
      <span className='product-price'>{amount}</span>
      <span className='product-currency currency'>{currency}</span>
    </div>
  );
};

export default Price;
