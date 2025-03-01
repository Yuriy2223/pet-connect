import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectFavorites, selectViewed } from '../../redux/notices/selectors';
import { toast } from 'react-toastify';
import { MyFavoriteCard } from '../MyFavoriteCard/MyFavoriteCard';
import { MyViewedCard } from '../MyViewedCard/MyViewedCard';
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
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector(selectFavorites);
  const viewed = useSelector(selectViewed);
  const [activeTab, setActiveTab] = useState<'favorites' | 'viewed'>(
    'favorites'
  );
  const isFavoritesTab = activeTab === 'favorites';
  const noticesList = isFavoritesTab ? favorites : viewed;
  const isEmpty = noticesList.length === 0;

  useEffect(() => {
    if (activeTab === 'favorites') {
      dispatch(fetchFavorites());
    } else {
      dispatch(fetchViews());
    }
  }, [activeTab, dispatch]);

  const handleRemoveFavorite = async (id: string) => {
    await dispatch(removeNoticesFavorite(id)).unwrap();
    toast.success('Removed from favorites');
    // dispatch(fetchFavorites());
  };

  return (
    <MyNoticesContainer>
      <WrapperBtn>
        <MyNoticesBtn
          onClick={() => setActiveTab('favorites')}
          className={activeTab === 'favorites' ? 'active' : ''}
          $isActive={isFavoritesTab}
        >
          My favorite pets
        </MyNoticesBtn>
        <MyNoticesBtn
          onClick={() => setActiveTab('viewed')}
          className={activeTab === 'viewed' ? 'active' : ''}
          $isActive={!isFavoritesTab}
        >
          Viewed
        </MyNoticesBtn>
      </WrapperBtn>

      <MyNoticesList>
        {isEmpty ? (
          <DefoltText>
            Oops,
            <NavLinkStyled to="/notices">
              looks like there aren't any furries
            </NavLinkStyled>
            on our adorable page yet. Do not worry! View your pets on the "find
            your favorite pet" page and add them to your favorites.
          </DefoltText>
        ) : (
          noticesList.map(notice => (
            <li key={notice._id}>
              {isFavoritesTab ? (
                <MyFavoriteCard
                  notice={notice}
                  onRemove={handleRemoveFavorite}
                />
              ) : (
                <MyViewedCard notice={notice} favorites={favorites} />
              )}
            </li>
          ))
        )}
      </MyNoticesList>
    </MyNoticesContainer>
  );
};
