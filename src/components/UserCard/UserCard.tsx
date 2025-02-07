import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/slice';
import { LogOutButton } from '../LogOutButton';
import { UserBlock } from '../UserBlock/UserBlock';
import { PetsBlock } from '../PetsBlock/PetsBlock';
import { EditUserButton } from '../EditUserButton';

export const UserCard: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <EditUserButton />
      <UserBlock />
      <PetsBlock />
      <LogOutButton
        onLogout={() => dispatch(openModal({ type: 'ModalApproveAction' }))}
      />
    </div>
  );
};
