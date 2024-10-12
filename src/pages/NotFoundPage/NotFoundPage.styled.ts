import styled from 'styled-components';
import { Container } from '../../components/Common/Container';
import { NavLink } from 'react-router-dom';
import m404 from '../../assets/imeges/mobail/t404.webp';
import m404Retina from '../../assets/imeges/mobail/t404-2x.webp';
import t404 from '../../assets/imeges/tablet/t404.webp';
import t404Retina from '../../assets/imeges/tablet/t404-2x.webp';
import d404 from '../../assets/imeges/desktop/d404.webp';
import d404Retina from '../../assets/imeges/desktop/d404-2x.webp';

export const NotFoundContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 26px 20px 20px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;
export const NotFoundWrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryDark};
  height: calc(100vh - 116px);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    border-radius: 60px;
    height: calc(100vh - 134px);
  }
  @media (min-width: 1280px) {
    height: calc(100vh - 146px);
  }
`;
export const NotFoundContent = styled.div`
  width: 270px;
  height: 224px;

  @media (min-width: 768px) {
    width: 640px;
    height: 436px;
  }
`;
export const NotFoundTitle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  li {
    font-weight: 800;
    font-size: 120px;
    line-height: 1;
    color: ${({ theme }) => theme.white};

    @media (max-width: 374px) {
      font-size: 100px;
    }

    @media (min-width: 768px) {
      font-size: 280px;
    }
  }
`;
export const Img404 = styled.div`
  border-radius: 50%;
  width: 108px;
  height: 108px;
  background: ${({ theme }) => theme.whiteOpacity};
  background-size: cover;
  background-image: url(${m404});

  @media (min-resolution: 2dppx) {
    background-image: url(${m404Retina});
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
    background-image: url(${t404});

    @media (min-resolution: 2dppx) {
      background-image: url(${t404Retina});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${d404});

    @media (min-resolution: 2dppx) {
      background-image: url(${d404Retina});
    }
  }
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.white};
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
    margin-top: 40px;
  }
`;
export const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavButton = styled(NavLink)`
  border-radius: 30px;
  padding: 12px 30px;
  background-color: ${({ theme }) => theme.primaryDark};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.whiteTr};

  &:hover {
    background-color: ${({ theme }) => theme.lightYellow};
    color: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    padding: 14px 30px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
