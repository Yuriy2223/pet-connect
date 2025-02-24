// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   MyNoticesContainer,
//   MyNoticesFavorite,
//   MyNoticesInner,
//   MyNoticesViewed,
// } from './MyNotices.styled';
// import { NoticesItem } from './NoticesItem'; // Компонент для одного оголошення
// import {
//   fetchFavorites,
//   fetchViewed,
//   removeFromFavorites,
// } from '../api/noticesApi'; // Імітація API-запитів

// export const MyNotices: React.FC = () => {
// const [activeTab, setActiveTab] = useState<'favorites' | 'viewed'>(
//   'favorites'
// );
// const [notices, setNotices] = useState([]);

// useEffect(() => {
//   const loadNotices = async () => {
//     const data =
//       activeTab === 'favorites'
//         ? await fetchFavorites()
//         : await fetchViewed();
//     setNotices(data);
//   };
//   loadNotices();
// }, [activeTab]);

// const handleRemove = async (id: string) => {
//   await removeFromFavorites(id);
//   setNotices(prev => prev.filter(notice => notice.id !== id)); // Оновлення списку без перезавантаження
// };

//   return (
//     <MyNoticesContainer>
//       <MyNoticesInner>
//         <MyNoticesFavorite
//           onClick={() => setActiveTab('favorites')}
//           className={activeTab === 'favorites' ? 'active' : ''}
//         >
//           My favorite pets
//         </MyNoticesFavorite>
//         <MyNoticesViewed
//           onClick={() => setActiveTab('viewed')}
//           className={activeTab === 'viewed' ? 'active' : ''}
//         >
//           Viewed
//         </MyNoticesViewed>
//       </MyNoticesInner>

//       {notices.length > 0 ? (
//         notices.map(notice => (
//           <NoticesItem
//             key={notice.id}
//             notice={notice}
//             onRemove={activeTab === 'favorites' ? handleRemove : undefined} // Видалення тільки для улюблених
//           />
//         ))
//       ) : (
//         <p>
//           Oops,{' '}
//           <NavLink to="/friends">looks like there aren't any furries</NavLink>{' '}
//           on our adorable page yet. Do not worry! View your pets on the "find
//           your favorite pet" page and add them to your favorites.
//         </p>
//       )}
//     </MyNoticesContainer>
//   );
// };

// import { NavLink } from 'react-router-dom';
// import {
//   MyNoticesContainer,
//   MyNoticesFavorite,
//   MyNoticesInner,
//   MyNoticesViewed,
// } from './MyNotices.styled';

// export const MyNotices: React.FC<{
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }> = ({ activeTab, setActiveTab }) => (
//   <MyNoticesContainer>
//     <MyNoticesInner>
//       <MyNoticesFavorite
//         onClick={() => setActiveTab('favorites')}
//         className={activeTab === 'favorites' ? 'active' : ''}
//       >
//         My favorite pets
//       </MyNoticesFavorite>
//       <MyNoticesViewed
//         onClick={() => setActiveTab('viewed')}
//         className={activeTab === 'viewed' ? 'active' : ''}
//       >
//         Viewed
//       </MyNoticesViewed>
//     </MyNoticesInner>
//     <p>
//       Oops,
//       <NavLink to="/friends">looks like there aren't any furries</NavLink> on
//       our adorable page yet. Do not worry! View your pets on the "find your
//       favorite pet" page and add them to your favorites.
//     </p>
//   </MyNoticesContainer>
// );
