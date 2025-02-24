// import React from 'react';
// import styled from 'styled-components';
// import { NoticesCard } from '../NoticesCard/NoticesCard';
// import { NoticesListProps } from '../../pages/NoticesPage/NoticesPage.type';

// const NoticesListContainer = styled.ul`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   gap: 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//     flex-wrap: wrap;
//   }
//   @media (min-width: 1280px) {
//     gap: 32px;
//     width: 1156px;
//     margin: 0 auto;
//   }
// `;

// export const NoticesList: React.FC<NoticesListProps> = ({ notices }) => {
//   return (
//     <NoticesListContainer>
//       {notices.map(notice => (
//         <li key={notice._id}>
//           <NoticesCard notice={notice} />
//         </li>
//       ))}
//     </NoticesListContainer>
//   );
// };
