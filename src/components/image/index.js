import React, { useState } from 'react';
import SkeletonImage from '../skeleton/skeletonImage';

const Image = ({ alt, src, src2x, width, height, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImage = (value) => {
    setImageLoaded(value);
  };

  return (
    <>
      {!imageLoaded && <SkeletonImage className='skeleton' borderRadius={8} />}

      <img
        alt={alt}
        className={className}
        src={src}
        width={width}
        height={height}
        srcSet={src2x ? `${src2x} 2x` : null}
        onLoad={handleImage}
      />
    </>
  );
};

export default Image;
