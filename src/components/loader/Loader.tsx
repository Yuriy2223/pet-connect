import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import startImage from '../../assets/imeges/mobail/main.webp';
import startRetina from '../../assets/imeges/mobail/main-2x.webp';

import startImage768 from '../../assets/imeges/tablet/main768.webp';
import startRetina768 from '../../assets/imeges/tablet/main768-2x.webp';

import startImage1280 from '../../assets/imeges/desktop/main1280.webp';
import startRetina1280 from '../../assets/imeges/desktop/main1280-2x.webp';

interface LoaderProps {
  percentage?: number;
}

const LoaderContainer = styled.div`
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

const AnimationContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Overlay = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;
const PercentageText = styled.div`
  position: absolute;
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
`;

export const Loader: React.FC<LoaderProps> = ({ percentage = 0 }) => {
  const [currentPercentage, setCurrentPercentage] = useState(percentage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercentage(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20); // Збільшуємо на 1%

    return () => clearInterval(interval);
  }, []);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentPercentage / 100) * circumference;

  return (
    <LoaderContainer>
      <AnimationContainer>
        <Overlay>
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1" // Зменшено товщину
            fill="transparent"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            // stroke="#fff"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="2" // Зменшено товщину
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </Overlay>
        <PercentageText>{currentPercentage}%</PercentageText>
      </AnimationContainer>
    </LoaderContainer>
  );
};
