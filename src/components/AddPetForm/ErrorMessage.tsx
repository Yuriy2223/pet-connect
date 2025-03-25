import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message?: string;
}
const ErrorMessageStyled = styled.p`
  color: ${({ theme }) => theme.red};
  font-weight: 500;
  font-size: 10px;
  position: absolute;
  bottom: -13px;
  left: 10px;

  @media (min-width: 768px) {
    font-size: 12px;
    bottom: -17px;
  }
`;

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <ErrorMessageStyled>{message}</ErrorMessageStyled>;
};
