import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduts } from '../../actions/products';
import Products from '../../components/products';
import Summary from '../../components/summary';

const ShoppingCart = ({ title, products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduts(products));
  }, []);

  const productsState = useSelector((state) => state.products);

  return (
    <>
      <Products title={title} products={productsState} />
      <Summary />
    </>
  );
};

export default ShoppingCart;
