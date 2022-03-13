import React from 'react';
import Item from '../item';
import Quantity from '../quantity';
import Price from '../price';
import Total from '../total';

const Products = ({ title, products }) => {
  console.log('products-->', products);

  const { productsList } = products;

  const tableList = [
    { title: 'Product details', name: 'product' },
    { title: 'Quantity', name: 'quantity' },
    { title: 'Price', name: 'price' },
    { title: 'Total', name: 'total' },
  ];

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
        {productsList?.map((product) => {
          const colList = [
            {
              component: (
                <Item
                  title={product.title}
                  id={product.id}
                  image={product.image}
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
    </section>
  );
};

export default Products;
