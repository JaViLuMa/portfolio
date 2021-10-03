import React, { FC } from 'react';

import './index.css';

const PortfolioText:FC<PortfolioTextProps> = ({ about }) => {
  return (
    <div className="about-me-container-text">
      <p className="about-me-container-text__paragraph">
        {about}
      </p>
    </div>
  );
}

export default PortfolioText;
