import React from 'react';

interface TotalProps {
  className: string;
  currency: string;
  total: number;
}

const Total = ({ className, currency, total }: TotalProps) => {
  return (
    <div className={className}>
      <span className='product-price'>{total}</span>
      <span className='product-currency currency'>{currency}</span>
    </div>
  );
};

export default Total;
