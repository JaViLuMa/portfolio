import React, { FC } from 'react';

import './index.css';

const Subtitle:FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <div className="subtitles">{subtitle}</div>
  );
}

export default Subtitle;
