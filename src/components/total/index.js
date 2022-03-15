import React from 'react';

const Total = ({ className, currency, total }) => {
  return (
    <div className={className}>
      <span className='product-price'>{total}</span>
      <span className='product-currency currency'>{currency}</span>
    </div>
  );
};

export default Total;
