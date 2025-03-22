import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MyNoticesContainer = styled.div`
  padding: 20px 0;
  border-radius: 30px;

  @media (min-width: 768px) {
    padding: 40px 0;
  }

  @media (min-width: 1280px) {
    width: 664px;
  }
`;
export const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    gap: 30px;
    margin-bottom: 30px;
  }
`;
export const MyNoticesBtn = styled.button<{ $isActive: boolean }>`
  border-radius: 30px;
  width: 124px;
  height: 42px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primaryDark};
  border: 1px solid ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ $isActive, theme }) =>
    $isActive &&
    `
      color: ${theme.white};
      background-color: ${theme.primaryDark};
    `}

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 18px;
    width: 156px;
    height: 50px;
  }
`;
export const MyNoticesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px 14px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    max-height: 948px;
    overflow-y: auto;
    padding-right: 6px;
  }

  @media (min-width: 1280px) {
    max-height: 890px;
  }
`;

export const DefoltText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${({ theme }) => theme.black};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  color: ${({ theme }) => theme.primaryDark};
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  padding: 4px;
  transition: all 300ms ease;

  &:hover {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }

  @media (min-width: 768px) {
    padding: 6px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
