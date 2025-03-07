import styled from 'styled-components';
import { Iconsvg } from '../../Common/Icons';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 335px;

  @media (min-width: 768px) {
    width: 227px;
  }
`;
export const ButtonSearch = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  z-index: 1;
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
export const ButtonClose = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  z-index: 1;
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
