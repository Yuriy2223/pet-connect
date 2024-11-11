import React from 'react';
import { EditUserBtn } from './EditUserBtn';
import { UserBlock } from './UserBlock';
import { PetsBlock } from './PetsBlock';
import { LogOutBtn } from './LogOutBtn';

export const UserCard: React.FC = () => {
  return (
    <div>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </div>
  );
};
