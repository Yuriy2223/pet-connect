import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { Notice } from '../../App.types';
import { MyNoticesCard } from '../MyNoticesCard/MyNoticesCard';
import { selectFavorites, selectViewed } from '../../redux/notices/selectors';
import {
  fetchFavorites,
  fetchViews,
  removeNoticesFavorite,
} from '../../redux/notices/operations';
import {
  DefoltText,
  MyNoticesBtn,
  MyNoticesContainer,
  MyNoticesList,
  NavLinkStyled,
  WrapperBtn,
} from './MyNotices.styled';

export const MyNotices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'favorites' | 'viewed'>(
    'favorites'
  );

  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector(selectFavorites);
  const viewed = useSelector(selectViewed);

  useEffect(() => {
    if (activeTab === 'favorites') {
      dispatch(fetchFavorites());
    } else {
      dispatch(fetchViews());
    }
  }, [activeTab, dispatch]);

  const handleRemove = async (id: string) => {
    try {
      await dispatch(removeNoticesFavorite(id)).unwrap();
    } catch (error) {
      console.error('Failed to remove favorite:', error);
    }
  };

  return (
    <MyNoticesContainer>
      <WrapperBtn>
        <MyNoticesBtn
          onClick={() => setActiveTab('favorites')}
          className={activeTab === 'favorites' ? 'active' : ''}
        >
          My favorite pets
        </MyNoticesBtn>
        <MyNoticesBtn
          onClick={() => setActiveTab('viewed')}
          className={activeTab === 'viewed' ? 'active' : ''}
        >
          Viewed
        </MyNoticesBtn>
      </WrapperBtn>

      <MyNoticesList>
        {activeTab === 'favorites' && favorites.length > 0 ? (
          favorites.map((notice: Notice) => (
            <li key={notice._id}>
              <MyNoticesCard notice={notice} onRemove={handleRemove} />
            </li>
          ))
        ) : activeTab === 'viewed' && viewed.length > 0 ? (
          viewed.map((notice: Notice) => (
            <li key={notice._id}>
              <MyNoticesCard notice={notice} />
            </li>
          ))
        ) : (
          <DefoltText>
            Oops,
            <NavLinkStyled to="/friends">
              looks like there aren't any furries
            </NavLinkStyled>
            on our adorable page yet. Do not worry! View your pets on the "find
            your favorite pet" page and add them to your favorites.
          </DefoltText>
        )}
      </MyNoticesList>
    </MyNoticesContainer>
  );
};
