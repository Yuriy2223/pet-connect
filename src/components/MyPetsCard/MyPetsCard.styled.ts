import { Iconsvg } from '../Common/Icons';
import styled from 'styled-components';

export const MyPetsCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.opacity};
  border-radius: 20px;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 14px;

  @media (max-width: 374px) {
    padding: 6px;
    gap: 6px;
    min-height: 111px;
  }
  @media (min-width: 768px) {
    width: 305px;
    gap: 14px;
  }
  @media (min-width: 1280px) {
    width: 440px;
    padding: 20px;
    gap: 20px;
  }
`;
export const WrapAvatarPets = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    border-radius: 50%;
  }
  @media (max-width: 374px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 768px) {
    width: 72px;
    height: 72px;
  }
  @media (min-width: 1280px) {
    width: 90px;
    height: 90px;
  }
`;
export const MyPetsCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    color: ${({ theme }) => theme.black};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 145px;
    @media (min-width: 768px) {
      width: 157px;
    }
    @media (min-width: 1280px) {
      width: 250px;
      font-size: 18px;
    }
  }

  @media (min-width: 1280px) {
    padding-bottom: 6px;
  }
`;
export const BtnTrash = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};

    svg {
      stroke: ${({ theme }) => theme.white};
    }
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;
export const IconTrash = styled(Iconsvg)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.primaryDark};
  fill: ${({ theme }) => theme.lightYellow};

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
export const MyPetsCardList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
export const MyPetsCardItem = styled.div`
  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.opacityTr};
    @media (min-width: 1280px) {
      font-size: 14px;
    }
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.black};
    @media (min-width: 1280px) {
      font-size: 16px;
    }
  }

  .name {
    max-width: 55px;
    @media (min-width: 1280px) {
      width: 64px;
    }
  }
  .birthday {
    width: 61px;
    @media (min-width: 1280px) {
      width: 78px;
    }
  }
  .sex {
    width: 48px;
    @media (min-width: 1280px) {
      max-width: 62px;
      width: 100%;
    }
  }
  .species {
    width: 48px;
    @media (min-width: 1280px) {
      width: 55px;
    }
  }
`;
