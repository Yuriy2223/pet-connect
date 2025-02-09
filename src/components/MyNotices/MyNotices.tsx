import { NavLink } from 'react-router-dom';
import {
  MyNoticesContainer,
  MyNoticesFavorite,
  MyNoticesInner,
  MyNoticesViewed,
} from './MyNotices.styled';

export const MyNotices: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => (
  <MyNoticesContainer>
    <MyNoticesInner>
      <MyNoticesFavorite
        onClick={() => setActiveTab('favorites')}
        className={activeTab === 'favorites' ? 'active' : ''}
      >
        My favorite pets
      </MyNoticesFavorite>
      <MyNoticesViewed
        onClick={() => setActiveTab('viewed')}
        className={activeTab === 'viewed' ? 'active' : ''}
      >
        Viewed
      </MyNoticesViewed>
    </MyNoticesInner>
    <p>
      Oops,
      <NavLink to="/friends">looks like there aren't any furries</NavLink> on
      our adorable page yet. Do not worry! View your pets on the "find your
      favorite pet" page and add them to your favorites.
    </p>
  </MyNoticesContainer>
);
