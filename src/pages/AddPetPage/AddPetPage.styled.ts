import styled from 'styled-components';
import { Container } from '../../components/Common/Container';
import { Iconsvg } from '../../components/Common/Icons';

export const AddPetPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) and (max-width: 1279px){
    gap: 32px;
    padding: 32px;
  }

  @media (min-width: 1280px) {
    padding: 32px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const AddPetImgContainer = styled.div`
  position: relative;
  border-radius: 30px;
  width: 335px;
  height: 280px;
  background-color: ${({ theme }) => theme.primaryDark};
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 374px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    border-radius: 60px;
    width: 704px;
    height: 248px;
  }

  @media (min-width: 1280px) {
    width: 592px;
    height: 654px;
  }
`;
export const AddPetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 297px;
    height: 248px;
    border-radius: 0;
    transform: translateX(70%);
  }
  @media (min-width: 1280px) {
    width: 512px;
    border-radius: 0;
    transform: translateX(6.5%);
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryDark};

  svg {
    width: 100%;
    height: 100%;
  }
`;
export const IconSmall = styled(Iconsvg)`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const IconMedium = styled(Iconsvg)`
  display: none;

  @media (min-width: 768px) and (max-width: 1279px) {
    display: block;
  }
`;
export const IconLarge = styled(Iconsvg)`
  display: none;

  @media (min-width: 1280px) {
    display: block;
  }
`;
export const AddFormWrapper = styled.div`
  border-radius: 30px;
  width: 335px;
  height: 489px;
  background-color: ${({ theme }) => theme.white};
  padding: 28px 20px 20px;

  border: 1px solid red; /** */

  @media (min-width: 320px) and (max-width: 374px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    border-radius: 60px;
    width: 704px;
    height: 614px;
  }

  @media (min-width: 1280px) {
    width: 592px;
    height: 654px;
  }
`;
