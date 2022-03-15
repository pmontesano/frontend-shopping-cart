import React from 'react';

interface PriceProps {
  className: string;
  amount: number;
  currency: string;
}

const Price = ({ className, amount, currency }: PriceProps) => {
  return (
    <div className={className}>
      <span className='product-price'>{amount}</span>
      <span className='product-currency currency'>{currency}</span>
    </div>
  );
};

export default Price;
