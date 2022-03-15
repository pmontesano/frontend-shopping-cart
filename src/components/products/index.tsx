import React, { useState } from 'react';
import Item from '../item';
import Quantity from '../quantity';
import Price from '../price';
import Total from '../total';
import ModalComponent from '../modal';
import ProductDetail from './detail';

interface ProductsProps {
  title: string;
  products: any;
}

const Products = ({ title, products }: ProductsProps) => {
  const { productsList } = products;

  const [productState, setProductState] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);
  const handleModalOpen = () => {
    setmodalOpen(true);
  };

  const handleOnClick = (product: any) => {
    setProductState(product);
    handleModalOpen();
  };

  const handleModalClose = () => {
    return setmodalOpen(false);
  };

  const tableList = [
    { title: 'Product details', name: 'product' },
    { title: 'Quantity', name: 'quantity' },
    { title: 'Price', name: 'price' },
    { title: 'Total', name: 'total' },
  ];

  const ModalView = ({ product }: any) => (
    <ModalComponent modalOpen={modalOpen} handleModalClose={handleModalClose}>
      <ProductDetail {...product} />
    </ModalComponent>
  );

  return (
    <section className='products'>
      <h1 className='main'>{title}</h1>
      <ul className='products-list tableHead'>
        <li className='products-list-title row'>
          {tableList.map((tableHead, i) => (
            <div key={i} className={`col-${tableHead.name}`}>
              {tableHead.title}
            </div>
          ))}
        </li>
      </ul>
      <ul className='products-list'>
        {productsList?.map((product: any) => {
          const colList = [
            {
              component: (
                <Item
                  title={product.title}
                  id={product.id}
                  image={product.image}
                  handleClick={() => handleOnClick(product)}
                />
              ),
              name: 'product',
            },
            {
              component: (
                <Quantity id={product.id} quantity={product.quantity} />
              ),
              name: 'quantity',
            },
            { component: <Price {...product.price} />, name: 'price' },
            {
              component: (
                <Total
                  total={product.price.amount * product.quantity.qty}
                  {...product.price}
                />
              ),
              name: 'total',
            },
          ];

          return (
            <li className='product row' key={product.id}>
              {colList.map((col) => (
                <div key={col.name} className={`col-${col.name}`}>
                  {col.component}
                </div>
              ))}
            </li>
          );
        })}
      </ul>
      {modalOpen && <ModalView product={productState} />}
    </section>
  );
};

export default Products;
