import React, { FC } from 'react';

import { Title, AboutMe } from '../';

import './index.css';

const Wrapper:FC = () => {
  return (
    <div className="main-container">
      <Title />
      <AboutMe />
    </div>
  );
}

export default Wrapper;
