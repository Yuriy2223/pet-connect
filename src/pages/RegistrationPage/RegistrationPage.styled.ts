import styled from 'styled-components';
import { Iconsvg } from '../../components/Common/Icons';
import { Container } from '../../components/Common/Container';

export const RegistrationPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const CatContainer = styled.div`
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
    height: 302px;
  }

  @media (min-width: 1280px) {
    width: 592px;
    height: 654px;
  }
`;
export const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 364px;
    height: 302px;
    transform: translateX(260px);
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
export const FormContainer = styled.div`
  border-radius: 30px;
  width: 335px;
  background-color: ${({ theme }) => theme.white};
  padding: 20px;

  @media (min-width: 320px) and (max-width: 374px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    border-radius: 60px;
    width: 704px;
    height: 560px;
    padding: 28px 140px;
  }

  @media (min-width: 1280px) {
    padding: 69px 84px;
    width: 592px;
    height: 654px;
  }
`;
export const MessageWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 32px;
    left: 32px;
    z-index: 2;
    display: flex;
    gap: 8px;
    padding: 16px;
    border-radius: 20px;
    width: 294px;
    height: 121px;
    background: ${({ theme }) => theme.white};
  }

  @media (min-width: 1280px) {
    bottom: 50px;
    left: 50px;
  }
`;
export const WrapperAnimal = styled.div`
  background-color: ${({ theme }) => theme.lightYellow};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 32px;
    height: 32px;
  }
`;
export const AnimalNameBirthday = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.primaryDark};
  }

  div {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.opacityTr};

    span {
      margin-left: 4px;
      color: ${({ theme }) => theme.black};
    }
  }
`;
export const AnimalDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.8);
  color: ${({ theme }) => theme.black};
`;
