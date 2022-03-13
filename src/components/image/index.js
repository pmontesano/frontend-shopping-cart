import React from 'react';

const Image = ({ alt, src, src2x, className }) => {
  return (
    <img
      alt={alt}
      className={className}
      src={src}
      srcSet={src2x ? `${src2x} 2x` : null}
    />
  );
};

export default Image;
