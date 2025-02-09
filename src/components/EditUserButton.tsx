import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modal/slice';

const EditUserButtonContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const EditUserBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 178px;
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

export interface EditUserButtonProps {
  onLogout?: () => void;
  closeMenu?: () => void;
}

export const EditUserButton: React.FC<EditUserButtonProps> = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(
      openModal({
        type: 'ModalEditUser',
        props: { actionType: '???????????????????????????????????' },
      })
    );
  }, [dispatch]);

  return (
    <EditUserButtonContainer>
      <EditUserBtn onClick={handleLogoutClick}>Log Out</EditUserBtn>
    </EditUserButtonContainer>
  );
};
