import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  width: 335px;
  height: 184px;

  @media (min-width: 320px) and (max-width: 374px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    width: 342px;
    height: 196px;
  }
  @media (min-width: 1280px) {
    width: 371px;
  }
`;
export const WorkingHours = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 32px;

  @media (min-width: 768px) {
    height: 34px;
  }
`;
export const WorkingHoursTag = styled.div`
  border-radius: 30px;
  padding: 8px;
  background: ${({ theme }) => theme.primaryLight};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
export const DatalisWrapper = styled.div`
  display: flex;
  height: 100%;
`;
export const LogoWrapper = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
export const InfolinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.black};
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;
export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.opacityTr};
  }
`;
export const ContactLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.black};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.primaryDark};
  }
`;
