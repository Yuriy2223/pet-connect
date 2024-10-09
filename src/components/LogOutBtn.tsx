import React from 'react';
import styled from 'styled-components';

interface LogOutBtnProps {
  onLogout: () => void; 
}

const Button = styled.button`
  background-color: transparent;
  border: 2px solid var(--bright-red);
  color: var(--bright-red);
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--bright-red);
    color: var(--white-color);
  }
`;

export const LogOutBtn: React.FC<LogOutBtnProps> = ({ onLogout }) => {
  return (
    <Button onClick={onLogout}>
      Log Out
    </Button>
  );
};
