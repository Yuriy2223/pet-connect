import styled from 'styled-components';
import { Container } from '../../components/Common/Container';
import homeM from '../../assets/imeges/mobail/home.webp';
import homeMRetina from '../../assets/imeges/mobail/home-2x.webp';
import homeT from '../../assets/imeges/tablet/home768.webp';
import homeTRetina from '../../assets/imeges/tablet/home768-2x.webp';
import homeD from '../../assets/imeges/desktop/home1280.webp';
import homeDRetina from '../../assets/imeges/desktop/home1280-2x.webp';

export const HomePageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;
export const HomePet = styled.div`
  border-radius: 30px;
  width: 335px;
  height: 402px;
  padding: 90px 30px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.primaryDark};

  @media (min-width: 320px) and (max-width: 374px) {
    width: 296px;
    height: 362px;
    padding: 65px 20px;
  }

  @media (min-width: 768px) {
    border-radius: 60px;
    width: 704px;
    height: 496px;
    padding: 90px 32px;
  }

  @media (min-width: 1280px) {
    width: 1216px;
    height: 384px;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 0.96;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.white};

  span {
    color: ${({ theme }) => theme.whiteTr};
  }

  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 45px;
  }

  @media (min-width: 768px) {
    font-size: 80px;
  }
  @media (min-width: 1280px) {
    font-size: 90px;
    line-height: 0.97;
  }
`;
export const HomeWrapperText = styled.div`
  padding-top: 24px;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.white};

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.22;
      width: 350px;
    }
    @media (min-width: 1280px) {
      width: 380px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  @media (min-width: 1280px) {
    justify-content: start;
  }
`;
export const HomePetImg = styled.div`
  border-radius: 30px;
  width: 335px;
  height: 402px;
  background-image: url(${homeM});
  background-size: cover;
  background-position: center;
  margin: 0 auto;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${homeMRetina});
  }

  @media (min-width: 320px) and (max-width: 374px) {
    width: 296px;
    height: 362px;
  }

  @media (min-width: 768px) {
    border-radius: 60px;
    width: 704px;
    height: 496px;
    background-image: url(${homeT});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${homeTRetina});
    }
  }

  @media (min-width: 1280px) {
    border-radius: 60px;
    width: 1216px;
    height: 384px;
    background-image: url(${homeD});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${homeDRetina});
    }
  }
`;
