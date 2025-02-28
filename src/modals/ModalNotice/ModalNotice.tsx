import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { AppDispatch } from '../../redux/store';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
import { Notice } from '../../App.types';
import {
  ModalContainer,
  RaitingIcon,
  HeartIcon,
  ImageWrapper,
  ModalButton,
  ModalButtonWrapper,
  RaitingWrapper,
  ModalList,
  ModalButtonLink,
} from './ModalNotice.styled';
import { selectFavorites } from '../../redux/notices/selectors';
import {
  addNoticesFavorite,
  removeNoticesFavorite,
} from '../../redux/notices/operations';
// import { selectIsSignedIn } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { fetchFullUserInfo } from '../../redux/user/operations';
import { fetchNoticesNoticeByIdApi } from '../../services/noticesApi';

export const ModalNotice: React.FC<{ notice: Notice }> = ({ notice }) => {
  const dispatch = useDispatch<AppDispatch>();
  // const isSignedIn = useSelector(selectIsSignedIn);
  const favorites = useSelector(selectFavorites);
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);
  const [userContact, setUserContact] = useState<{
    email: string;
    phone: string;
  } | null>(null);

  const isFavorite = favorites.some(
    favoriteNotice => favoriteNotice._id === notice._id
  );

  // if (!isSignedIn) {
  //   dispatch(closeModal());
  //   return;
  // }

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await fetchNoticesNoticeByIdApi(notice._id);
      setUserContact(response.user);
    };

    fetchContactInfo();
  }, [notice._id]);

  const handleClickFavorites = () => {
    if (isFavorite) {
      dispatch(removeNoticesFavorite(notice._id));
      toast.success('Removed from favorites');
    } else {
      dispatch(addNoticesFavorite(notice._id));
      toast.success('Added to favorites');
    }
    dispatch(fetchFullUserInfo());
    dispatch(closeModal());
  };

  const handleClickContact = () => {
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <ImageWrapper>
        <img
          src={imgSrc}
          alt={notice.title}
          onError={() => setImgSrc(defaultImage)}
        />
        <div>{notice.category}</div>
      </ImageWrapper>
      <h2>{notice.title}</h2>
      <RaitingWrapper>
        <RaitingIcon width={18} height={18} iconName="star" />
        <RaitingIcon width={18} height={18} iconName="star" />
        <RaitingIcon width={18} height={18} iconName="star" />
        <RaitingIcon width={18} height={18} iconName="star" />
        <RaitingIcon width={18} height={18} iconName="star" />
        <span>{notice.popularity}</span>
      </RaitingWrapper>
      <ModalList>
        <li>
          Name<span>{notice.name}</span>
        </li>
        <li>
          Birthday
          <span>{notice.birthday?.split('-').reverse().join('.')}</span>
        </li>
        <li>
          Sex<span>{notice.sex}</span>
        </li>
        <li>
          Species<span>{notice.species}</span>
        </li>
        <li>
          Category<span>{notice.category}</span>
        </li>
      </ModalList>
      <p>{notice.comment}</p>
      <ModalButtonWrapper>
        <ModalButton title="Add to favorites" onClick={handleClickFavorites}>
          Add to <HeartIcon width={18} height={18} iconName="heart" />
        </ModalButton>
        <div>
          <ModalButtonLink
            href={`tel:${userContact?.phone || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClickContact}
          >
            Call
          </ModalButtonLink>
          <ModalButtonLink
            href={`mailto:${userContact?.email || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClickContact}
          >
            Write a letter
          </ModalButtonLink>
        </div>
      </ModalButtonWrapper>
    </ModalContainer>
  );
};
