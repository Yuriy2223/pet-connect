import styled from 'styled-components';
import { Iconsvg } from '../../components/Common/Icons';

export const ModalContainer = styled.div`
  padding: 40px 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.primaryDark};
    text-align: center;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.17;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    padding: 60px 30px;
  }
`;
export const ImageWrapper = styled.div`
  width: 121px;
  height: 121px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 6px solid ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;

  img {
    border-radius: 50%;
    width: 115px;
    height: 115px;

    @media (min-width: 768px) {
      width: 145px;
      height: 145px;
    }
  }

  @media (min-width: 768px) {
    width: 151px;
    height: 151px;
  }

  div {
    position: absolute;
    left: -20px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 60px;
    height: 34px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.primaryDark};
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};
  }
`;
export const RaitingEndPriseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  p {
    display: flex;
    align-items: center;

    span {
      margin-left: 4px;
      color: ${({ theme }) => theme.red};
    }
  }
`;
export const RaitingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  /* margin-bottom: 20px; */

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: ${({ theme }) => theme.black};
    margin-left: 8px;

    @media (min-width: 768px) {
      line-height: 1.43;
    }
  }
`;
export const RaitingIcon = styled(Iconsvg)`
  fill: ${({ theme }) => theme.star};
  stroke: ${({ theme }) => theme.star};
`;
export const ModalList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 61px;
    height: 36px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.opacityTr};
    @media (max-width: 374px) {
      width: 54px;
      height: 36px;
      font-weight: 500;
      font-size: 10px;
    }

    span {
      width: 100%;
      height: 14px;
      color: ${({ theme }) => theme.black};
      margin-top: 4px;
      display: block;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
export const ModalButton = styled.button<{ $isActive?: boolean }>`
  border-radius: 30px;
  width: 166px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  border: 1px solid ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.primaryDark : theme.lightYellow};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.white : theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};

    svg {
      stroke: ${({ theme }) => theme.lightYellow};
      fill: ${({ theme }) => theme.lightYellow};
    }
  }

  @media (min-width: 768px) {
    width: 166px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }

  svg {
    stroke: ${({ theme, $isActive }) =>
      $isActive ? theme.red : theme.primaryDark};
    fill: ${({ theme, $isActive }) => ($isActive ? theme.red : 'none')};
  }
`;
export const HeartIcon = styled(Iconsvg)`
  /* fill: ${({ theme }) => theme.primaryDark};
  stroke: ${({ theme }) => theme.primaryDark}; */
  transition: all 300ms ease;
`;
export const ModalButtonLink = styled.a`
  border-radius: 30px;
  width: 122px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  border: 1px solid ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 768px) {
    width: 132px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
