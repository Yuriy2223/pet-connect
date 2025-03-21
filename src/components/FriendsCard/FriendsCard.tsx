import React from 'react';
import defaultImage from '../../assets/imeges/deffLogoFrends.webp';
import { Friend, WorkDay } from '../../App.types';
import {
  CardContainer,
  ImgLogo,
  ContactLink,
  WorkingHours,
  WorkingHoursTag,
  LogoWrapper,
  DatalisWrapper,
  InfoList,
  Name,
  InfolinkWrapper,
} from './FriendsCard.styled';

interface FriendCardProps {
  friend: Friend;
}

const getWorkingHours = (workDays: WorkDay[]): string => {
  if (!workDays || workDays.length === 0) return 'Day and night';

  const today = new Date().getDay();
  const todayWorkDay = workDays[today === 0 ? 6 : today - 1];

  if (todayWorkDay && todayWorkDay.isOpen) {
    return `${todayWorkDay.from || 'N/A'} - ${todayWorkDay.to || 'N/A'}`;
  }
  return 'Closed today';
};

export const FriendsCard: React.FC<FriendCardProps> = ({ friend }) => {
  const workingHours = getWorkingHours(friend.workDays);

  return (
    <CardContainer>
      <WorkingHours>
        <WorkingHoursTag>{workingHours}</WorkingHoursTag>
      </WorkingHours>
      <DatalisWrapper>
        <LogoWrapper>
          <ImgLogo src={friend.imageUrl || defaultImage} alt="logo images" />
        </LogoWrapper>
        <InfolinkWrapper>
          <Name>{friend.title}</Name>
          <InfoList>
            <div>
              Email:
              <ContactLink href={`mailto:${friend.email}`}>
                {friend.email ?? 'Not available'}
              </ContactLink>
            </div>
            <div>
              Address:
              <ContactLink href={friend.addressUrl} target="_blank">
                {friend.address ?? 'Not available'}
              </ContactLink>
            </div>
            <div>
              Phone:
              <ContactLink href={`tel:${friend.phone}`}>
                {friend.phone ?? 'Not available'}
              </ContactLink>
            </div>
          </InfoList>
        </InfolinkWrapper>
      </DatalisWrapper>
    </CardContainer>
  );
};
