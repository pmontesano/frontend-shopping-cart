import React from 'react';
import Image from '../image';

interface Item {
  title: string;
  image: any;
  id: string;
  handleClick: any;
}

const Item = ({ title, image, id, handleClick }: Item) => {
  const { src, alt } = image;

  return (
    <div className='product' onClick={handleClick}>
      <figure className='product-image'>
        <Image src={src} alt={alt} width={70} height={70} className='img' />
      </figure>
      <div className='product-description'>
        <h1>{title}</h1>
        <p className='product-code'>Product code {id}</p>
      </div>
    </div>
  );
};

export default Item;
