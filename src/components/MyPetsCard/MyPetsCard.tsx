import React, { useCallback } from 'react';
import { PetProfile } from '../../redux/user/user.types';
import { format } from 'date-fns';
import {
  BtnTrash,
  IconTrash,
  MyPetsCardContainer,
  MyPetsCardHeader,
  MyPetsCardList,
  MyPetsCardItem,
  WrapAvatarPets,
} from './MyPetsCard.styled';
import { openModal } from '../../redux/modal/slice';
import { useDispatch } from 'react-redux';

interface MyPetsCardProps {
  pet: PetProfile;
}

export const MyPetsCard: React.FC<MyPetsCardProps> = ({ pet }) => {
  const dispatch = useDispatch();
  // const formatDate = (dateString: string) => {
  //   return format(new Date(dateString), 'dd.MM.yyyy');
  // };
  const formatDate = (dateString: string) => {
    if (!dateString || typeof dateString !== 'string') return 'Unknown date';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';

    return format(date, 'dd.MM.yyyy');
  };

  const handleDeletePets = useCallback(() => {
    dispatch(
      openModal({
        type: 'ModalDeleteMyPets',
        props: { petId: pet._id },
      })
    );
  }, [dispatch, pet._id]);

  return (
    <MyPetsCardContainer>
      <WrapAvatarPets>
        <img src={pet.imgURL} alt="Avatar pets" />
      </WrapAvatarPets>
      <div>
        <MyPetsCardHeader>
          <h3>{pet.title}</h3>
          <BtnTrash onClick={handleDeletePets}>
            <IconTrash iconName="trash" />
          </BtnTrash>
        </MyPetsCardHeader>
        <MyPetsCardList>
          <MyPetsCardItem>
            <p>Name</p>
            <span className="name">{pet.name}</span>
          </MyPetsCardItem>
          <MyPetsCardItem>
            <p>Birthday</p>
            <span className="birthday">{formatDate(pet.birthday)}</span>
          </MyPetsCardItem>
          <MyPetsCardItem>
            <p>Sex</p>
            <span className="sex">{pet.sex}</span>
          </MyPetsCardItem>
          <MyPetsCardItem>
            <p>Species</p>
            <span className="species">{pet.species}</span>
          </MyPetsCardItem>
        </MyPetsCardList>
      </div>
    </MyPetsCardContainer>
  );
};
