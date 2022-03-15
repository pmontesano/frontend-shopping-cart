import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Checkout from '../checkout';
import { sumFunc, formatPrice } from '../../utils';

const Summary = () => {
  const productsState = useSelector((state: RootStateOrAny) => state);

  const { productsList } = productsState.products;

  const totalItems = productsList.map((p: any) => p.quantity.qty);
  const totalPrice = productsList.map(
    (p: any) => p.price.amount * p.quantity.qty
  );

  const cart: [] = [];
  const co = new Checkout(productsList, cart);

  // scanning products
  co.scan('MUG').scan('TSHIRT').scan('CAP');

  const summary = {
    totalItems: totalItems.length !== 0 ? totalItems.reduce(sumFunc) : null,
    totalPrice: totalPrice.length !== 0 ? totalPrice.reduce(sumFunc) : null,
    mugOffer: co.getDiscount('MUG'),
    shirtOffer: co.getDiscount('TSHIRT'),
  };

  const totalCartPrice = co.total(summary?.totalPrice);

  const discountList = [
    { title: '2x1 Mug offer', price: summary?.mugOffer },
    { title: 'x3 Shirt offer', price: summary?.shirtOffer },
    { title: 'Promo code', price: 0 },
  ];

  return (
    <aside className='summary'>
      <h1 className='main'>Order Summary</h1>
      <ul className='summary-items wrapper border'>
        <li>
          <span className='summary-items-number'>
            {summary?.totalItems} Items
          </span>
          <span className='summary-items-price'>
            {formatPrice(summary?.totalPrice)}
          </span>
        </li>
      </ul>
      <div className='summary-discounts wrapper-half border'>
        <h2>Discounts</h2>
        <ul>
          {discountList.map((item, i) => (
            <li key={i}>
              <span>{item.title}</span>
              <span>-{formatPrice(item.price)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='summary-total wrapper'>
        <ul>
          <li>
            <span className='summary-total-cost'>Total cost</span>
            <span className='summary-total-price'>
              {formatPrice(totalCartPrice)}
            </span>
          </li>
        </ul>
        <button type='submit'>Checkout</button>
      </div>
    </aside>
  );
};

export default Summary;
