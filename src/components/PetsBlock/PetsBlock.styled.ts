import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PetsBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 30px;
  width: 100%;
  padding: 20px 14px;
  background-color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    padding: 40px 34px;
  }

  @media (min-width: 1280px) {
    width: 520px;
  }
`;
export const AddPetBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.black};
  }
`;
export const PetsBlockNavLink = styled(NavLink)`
  border-radius: 30px;
  width: 104px;
  height: 40px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primaryDark};
  border: 1px solid ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  transition: all 300ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  span {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    width: 120px;
  }
`;
export const PetsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;

  overflow-y: auto;
  padding-right: 6px;
  max-height: 276px;

  @media (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    max-height: 276px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
    max-height: 364px;
  }
`;
export const PetsLogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 114px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 768px) {
    width: 136px;
    height: 50px;
    font-size: 16px;
  }
`;
