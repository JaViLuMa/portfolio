import React, { FC } from 'react';

import { Subtitle, ThematicChange } from "../";

import PortfolioPicture from "./PortfolioPicture";
import PortfolioText from "./PortfolioText";

import matej from '../../images/matej_ruzic.webp';

import './index.css';

const AboutMe:FC = () => {
  return (
    <>
      <Subtitle subtitle="About me" />

      <ThematicChange />

      <div className="about-me-container">
        <PortfolioPicture
          title="Matej Ruzic"
          alt="Picture of Matej Ruzic"
          src={matej}
        />
        <PortfolioText
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Aenean euismod elementum nisi quis eleifend quam adipiscing vitae
          proin. Eu scelerisque felis imperdiet proin fermentum leo vel.
          Lobortis scelerisque fermentum dui faucibus in ornare quam. Sodales
          ut etiam sit amet nisl purus in mollis nunc. Ultricies tristique nulla
          aliquet enim tortor at. In dictum non consectetur a erat nam at lectus.
          Ullamcorper eget nulla facilisi etiam. Aliquam sem et tortor consequat id
          porta.Cras ornare arcu dui vivamus. Volutpat diam ut venenatis tellus.
          Aliquet porttitor lacus luctus accumsan tortor posuere ac. Tellus cras
          adipiscing enim eu. Risus ultricies tristique nulla aliquet enim tortor.
          Venenatis cras sed felis eget. Semper risus in hendrerit gravida."
        />
      </div>
    </>
  );
}

export default AboutMe;
