import React, { FC } from 'react';

import './index.css';

const PortfolioPicture:FC<PortfolioPictureProps> = ({ alt, title, src }) => {
  return (
    <div>
      <img
        alt={alt}
        title={title}
        src={src}
        className="about-me-container__image"
      />
    </div>
  );
}

export default PortfolioPicture;
