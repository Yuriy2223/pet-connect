import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const SearchContainer = styled.div`
  position: relative;
`;
export const Search = styled.input`
  border: 1px solid ${({ theme }) => theme.opacity};
  border-radius: 30px;
  padding: 12px 50px 12px 12px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.opacityTr};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    width: 335px;
  }
`;
export const ButtonClose = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
`;
export const IconClose = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.red};
`;
export const ButtonSearch = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
export const IconsSearch = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.primaryDark};
`;
