import { useSelector } from 'react-redux';
import { EditUserButton } from '../EditUserButton';
import { selectUserProfile } from '../../redux/user/selectors';
import {
  AvatarIconDef,
  UserBlockAvatar,
  UserBlockAvatarImg,
  UserBlockBox,
  UserBlockBoxIcon,
  UserBlockContainer,
  UserBlockHeader,
  UserBlockInputBox,
  UserBlockTitle,
} from './UserBlock.styled';

export const UserBlock: React.FC = () => {
  const userProfile = useSelector(selectUserProfile);
  console.log('userProfile:', userProfile);

  return (
    <UserBlockContainer>
      <UserBlockHeader>
        <UserBlockBox>
          <p>User</p>
          <UserBlockBoxIcon iconName="user" />
        </UserBlockBox>
        <EditUserButton />
      </UserBlockHeader>
      <UserBlockAvatar>
        {userProfile?.avatar ? (
          <UserBlockAvatarImg src={userProfile.avatar} alt="User avatar" />
        ) : (
          <AvatarIconDef iconName="user" />
        )}
      </UserBlockAvatar>
      <UserBlockTitle>My information</UserBlockTitle>
      <UserBlockInputBox>
        <input
          type="text"
          placeholder="Name"
          value={userProfile?.name || ''}
          readOnly
        />
        <input
          type="email"
          placeholder="Email"
          value={userProfile?.email || ''}
          readOnly
        />
        <input
          type="tel"
          placeholder="Phone"
          value={userProfile?.phone || ''}
          readOnly
        />
      </UserBlockInputBox>
    </UserBlockContainer>
  );
};
