import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { closeModal } from '../../redux/modal/slice';
import { AppDispatch } from '../../redux/store';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
import { Notice } from '../../App.types';
import { fetchNoticesNoticeByIdApi } from '../../services/noticesApi';
import {
  addNoticesFavorite,
  fetchFavorites,
  removeNoticesFavorite,
} from '../../redux/notices/operations';
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
  RaitingEndPriseWrapper,
} from './ModalNotice.styled';

export const ModalNotice: React.FC<{ notice: Notice; favorites: Notice[] }> = ({
  notice,
  favorites,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = favorites.some(favorite => favorite._id === notice._id);
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);
  const [userContact, setUserContact] = useState<{
    email: string;
    phone: string;
  } | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await fetchNoticesNoticeByIdApi(notice._id);
      setUserContact(response.user);
    };

    fetchContactInfo();
  }, [notice._id]);

  const handleClickFavorites = async (id: string) => {
    if (isFavorite) {
      await dispatch(removeNoticesFavorite(id));
      toast.success('Removed from favorites');
    } else {
      await dispatch(addNoticesFavorite(id));
      toast.success('Added to favorites');
    }

    dispatch(fetchFavorites());
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
      <RaitingEndPriseWrapper>
        <p>
          Price: <span>{notice.price ? `${notice.price}$` : '🙂'}</span>
        </p>
        <RaitingWrapper>
          <RaitingIcon width={18} height={18} iconName="star" />
          <RaitingIcon width={18} height={18} iconName="star" />
          <RaitingIcon width={18} height={18} iconName="star" />
          <RaitingIcon width={18} height={18} iconName="star" />
          <RaitingIcon width={18} height={18} iconName="star" />
          <span>{notice.popularity}</span>
        </RaitingWrapper>
      </RaitingEndPriseWrapper>
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
        <ModalButton
          $isActive={isFavorite}
          onClick={() => handleClickFavorites(notice._id)}
        >
          Add or Remove
          <HeartIcon width={18} height={18} iconName="heart" />
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
