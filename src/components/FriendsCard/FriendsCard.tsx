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

export const FriendsCard: React.FC<FriendItemProps> = ({
  title,
  imageUrl,
  address,
  addressUrl,
  phone,
  email,
  workDays,
}) => {
  // Визначаємо сьогоднішній день тижня
  const today = new Date().getDay(); // Повертає індекс дня (0 - Неділя, 1 - Понеділок...)
  const todayWorkDay = workDays[today - 1]; // Оскільки масив починається з понеділка

  // Перевіряємо чи існує todayWorkDay і чи має воно властивість isOpen
  const workingHours =
    todayWorkDay && todayWorkDay.isOpen
      ? `${todayWorkDay.from} - ${todayWorkDay.to}`
      : 'Closed today';

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
            <li>
              Email:<ContactLink href={`mailto:${email}`}> {email}</ContactLink>
            </li>
            <li>
              Address:
              <ContactLink href={addressUrl} target="_blank">
                {address}
              </ContactLink>
            </li>
            <li>
              Phone: <ContactLink href={`tel:${phone}`}> {phone}</ContactLink>
            </li>
          </InfoList>
        </InfolinkWrapper>
      </DatalisWrapper>
    </CardContainer>
  );
};
