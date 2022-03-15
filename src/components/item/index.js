import React from 'react';
import Image from '../image';

const Item = ({ title, image, id, className, handleClick }) => {
  const { src, alt } = image;

  return (
    <div className='product' onClick={handleClick}>
      <figure className='product-image'>
        <Image src={src} alt={alt} width={70} height={70} />
      </figure>
      <div className='product-description'>
        <h1>{title}</h1>
        <p className='product-code'>Product code {id}</p>
      </div>
    </div>
  );
};

export default Item;
