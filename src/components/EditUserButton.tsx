import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/modal/slice';
import { Iconsvg } from './Common/Icons';

export const EditUserButtonContainer = styled.div``;

export const EditUserBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};

  &:hover,
  &.active {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.primaryDark};

    svg {
      stroke: ${({ theme }) => theme.white};
      fill: ${({ theme }) => theme.white};
    }
  }
`;

export const EditUserBtnIcon = styled(Iconsvg)`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.primaryDark};
  fill: ${({ theme }) => theme.lightYellow};
`;

export interface EditUserButtonProps {
  // onLogout?: () => void;
  closeMenu?: () => void;
}

export const EditUserButton: React.FC<EditUserButtonProps> = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(
      openModal({
        type: 'ModalEditUser',
        // props: { actionType: 'editUser' },
      })
    );
  }, [dispatch]);

  return (
    <EditUserButtonContainer>
      <EditUserBtn onClick={handleLogoutClick}>
        <EditUserBtnIcon width={32} height={32} iconName="edit" />
      </EditUserBtn>
    </EditUserButtonContainer>
  );
};
