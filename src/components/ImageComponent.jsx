import React, { memo } from 'react';
import NoImage from 'assets/images/noimage.jpg';

function ImageComponent({ src, className, alt }) {
  return (
    <img
      className={className ? className : ''}
      src={src || NoImage}
      alt={alt ? alt : ''}
    />
  );
}

export default memo(ImageComponent);
