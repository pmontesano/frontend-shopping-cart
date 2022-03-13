import React from 'react';
import Image from '../image';

const Item = ({ title, image, id, className }) => {
  const { src, alt } = image;

  return (
    <div className={className}>
      <figure className='product-image'>
        <Image src={src} alt={alt} />
        <div className='product-description'>
          <h1>{title}</h1>
          <p className='product-code'>Product code {id}</p>
        </div>
      </figure>
    </div>
  );
};

export default Item;
