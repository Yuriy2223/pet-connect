import styled from 'styled-components';
import { Iconsvg } from '../Icons';

export const SearchContainer = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width || '100%'};

  @media (min-width: 768px) {
    width: 265px;
  }
`;
export const Search = styled.input`
  border: 1px solid ${({ theme }) => theme.opacity};
  border-radius: 30px;
  padding: 12px 55px 12px 12px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.opacityTr};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.black};
  }

  @media (min-width: 768px) {
    padding: 14px 60px 14px 14px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const ButtonClose = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 40px;
  }
`;
export const IconClose = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.opacityTr};

  &:hover {
    stroke: ${({ theme }) => theme.red};
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ButtonSearch = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: 15px;
  }
`;
export const IconsSearch = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.opacityTr};

  &:hover {
    stroke: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
