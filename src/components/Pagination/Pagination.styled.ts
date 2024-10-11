import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  @media  (max-width: 767px) {
    gap: 1px;
  }
`;
export const PageButton = styled.button<{ $active?: string }>`
  background-color: ${({ $active, theme }) =>
    $active === 'true' ? theme.primaryDark : theme.white};
  color: ${({ $active, theme }) =>
    $active === 'true' ? theme.white : theme.black};
  border: 1px solid
    ${({ $active, theme }) =>
      $active === 'true' ? theme.primaryDark : theme.opacity};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.29;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.primaryDark};
  }

  @media  (max-width: 767px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;
export const ArrowButton = styled.button<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.disabledBorderColor : theme.opacity};
  color: ${({ disabled, theme }) =>
    disabled ? theme.opacity : theme.primaryDark};
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? 'transparent' : theme.primaryDark};
    border-color: ${({ disabled, theme }) =>
      disabled ? theme.opacity : theme.primaryDark};
  }

  @media  (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;
export const Icon = styled(Iconsvg)<{ isDisabled?: boolean }>`
  fill: ${({ isDisabled, theme }) =>
    isDisabled ? theme.opacity : theme.black};
  width: 30px;
  height: 30px;
  transition: all 300ms ease;

  &:hover {
    fill: ${({ theme, isDisabled }) =>
      isDisabled ? theme.opacity : theme.white};
  }

  @media  (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;
export const IconTwo = styled(Iconsvg)<{ isDisabled?: boolean }>`
  fill: ${({ isDisabled, theme }) =>
    isDisabled ? theme.opacity : theme.black};
  width: 40px;
  height: 40px;
  transition: all 300ms ease;

  &:hover {
    fill: ${({ theme, isDisabled }) =>
      isDisabled ? theme.opacity : theme.white};
  }

  @media  (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;
