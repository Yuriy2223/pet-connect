import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modal/slice';

const LogOutBtnContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 112px;
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
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }
`;

interface LogOutButtonProps {
  onLogout: () => void;
  closeMenu?: () => void;
}

export const LogOutButton: React.FC<LogOutButtonProps> = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(
      openModal({ type: 'ModalApproveAction', props: { actionType: 'logout' } })
    );
  }, [dispatch]);

  return (
    <LogOutBtnContainer>
      <LogOutBtn onClick={handleLogoutClick}>Log Out</LogOutBtn>
    </LogOutBtnContainer>
  );
};
