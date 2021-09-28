import React, { memo } from 'react';
function ImageComponent({ src, className, alt }) {
  return (
    <img
      className={className ? className : ''}
      src={src}
      alt={alt ? alt : ''}
    />
  );
}

export default memo(ImageComponent);
