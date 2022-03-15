import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getProduts } from '../../actions/products';
import Products from '../../components/products';
import Summary from '../../components/summary';

interface ShoppingCart {
  title: string;
  products: any;
}

const ShoppingCart = ({ title, products }: ShoppingCart) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduts(products));
  }, []);

  const productsState = useSelector((state: RootStateOrAny) => state.products);

  return (
    <>
      <Products title={title} products={productsState} />
      <Summary />
    </>
  );
};

export default ShoppingCart;
