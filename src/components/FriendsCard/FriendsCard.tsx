import React from 'react';
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

import defaultImage from '../../assets/imeges/deffLogoFrends.webp';

interface WorkDay {
  isOpen: boolean;
  from?: string;
  to?: string;
}

interface FriendItemProps {
  title: string;
  imageUrl?: string;
  address: string;
  addressUrl: string;
  phone: string;
  email: string;
  workDays: WorkDay[];
}

const getWorkingHours = (workDays: WorkDay[]): string => {
  if (!workDays || workDays.length === 0) return 'No hours available';

  const today = new Date().getDay();
  const todayWorkDay = workDays[today === 0 ? 6 : today - 1];

  if (todayWorkDay && todayWorkDay.isOpen) {
    return `${todayWorkDay.from || 'N/A'} - ${todayWorkDay.to || 'N/A'}`;
  }
  return 'Closed today';
};

export const FriendsCard: React.FC<FriendItemProps> = ({
  title,
  imageUrl,
  address,
  addressUrl,
  phone,
  email,
  workDays,
}) => {
  const workingHours = getWorkingHours(workDays);

  return (
    <CardContainer>
      <WorkingHours>
        <WorkingHoursTag>{workingHours}</WorkingHoursTag>
      </WorkingHours>
      <DatalisWrapper>
        <LogoWrapper>
          <ImgLogo src={imageUrl || defaultImage} alt="logo images" />
        </LogoWrapper>
        <InfolinkWrapper>
          <Name>{title}</Name>
          <InfoList>
            <div>
              Email: <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            </div>
            <div>
              Address:
              <ContactLink href={addressUrl} target="_blank">
                {address}
              </ContactLink>
            </div>
            <div>
              Phone: <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
            </div>
          </InfoList>
        </InfolinkWrapper>
      </DatalisWrapper>
    </CardContainer>
  );
};
