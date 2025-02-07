import { NavLink } from 'react-router-dom';

export const MyNotices: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => (
  <PetsInformationWrappper>
    <div>
      <button
        type="button"
        onClick={() => setActiveTab('favorites')}
        className={activeTab === 'favorites' ? 'active' : ''}
      >
        My favorite pets
      </button>
      <button
        type="button"
        onClick={() => setActiveTab('viewed')}
        className={activeTab === 'viewed' ? 'active' : ''}
      >
        Viewed
      </button>
    </div>
    <p>
      Oops,
      <NavLink to="/friends">looks like there aren't any furries</NavLink> on
      our adorable page yet. Do not worry! View your pets on the "find your
      favorite pet" page and add them to your favorites.
    </p>
  </PetsInformationWrappper>
);
