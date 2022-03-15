import React, { useState } from 'react';
import SkeletonImage from '../skeleton/skeletonImage';

interface Image {
  alt: string;
  src: string;
  width: number | string;
  height: number | string;
  className: string;
}

const Image = ({ alt, src, width, height, className }: Image) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImage = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {!imageLoaded && <SkeletonImage className='skeleton' />}

      <img
        alt={alt}
        className={className}
        src={src}
        width={width}
        height={height}
        onLoad={handleImage}
      />
    </>
  );
};

export default Image;
