import React from 'react';
import Image from '../image';
import { formatPrice } from '../../utils';

const ProductDetail = ({ title, id, image, price }) => {
  const { amount } = price;

  return (
    <section className='product-detail'>
      <div className='product-detail__image'>
        <Image src={image.src2x} alt={image.alt} width={800} />
      </div>
      <div className='product-detail__info'>
        <div className='product-detail__info-top wrapper border'>
          <h1>{title}</h1>
          <span className='product-detail__price'>{formatPrice(amount)}</span>
        </div>
        <p className='product-detail__text wrapper border'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className='product-code'>Product code {id}</p>
        <div className='product-detail__info-bottom wrapper'>
          <button type='submit' className='button button-primary'>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
