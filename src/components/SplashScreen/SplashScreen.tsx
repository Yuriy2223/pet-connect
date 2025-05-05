import React from 'react';
import styled from 'styled-components';

import startImage from '../../assets/imeges/mobail/main.webp';
import startRetina from '../../assets/imeges/mobail/main-2x.webp';

import startImage768 from '../../assets/imeges/tablet/main768.webp';
import startRetina768 from '../../assets/imeges/tablet/main768-2x.webp';

import startImage1280 from '../../assets/imeges/desktop/main1280.webp';
import startRetina1280 from '../../assets/imeges/desktop/main1280-2x.webp';

const SplashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${startImage});
  background-size: cover;
  background-position: center;
  z-index: 10;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${startRetina});
  }

  @media (min-width: 768px) {
    background-image: url(${startImage768});

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${startRetina768});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${startImage1280});

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${startRetina1280});
    }
  }
`;
const LogoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Logo = styled.div`
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
`;

export const SplashScreen: React.FC = () => {
  return (
    <SplashContainer>
      <LogoOverlay />
      <Logo>pet l💛ve</Logo>
    </SplashContainer>
  );
};
