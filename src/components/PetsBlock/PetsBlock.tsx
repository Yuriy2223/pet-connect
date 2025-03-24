import { openModal } from '../../redux/modal/slice';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { selectUserProfile } from '../../redux/user/selectors';
import { MyPetsCard } from '../MyPetsCard/MyPetsCard';
import { useAppDispatch } from '../../redux/store';
import {
  AddPetBlock,
  NotFoundMessage,
  PetsBlockContainer,
  PetsBlockNavLink,
  PetsList,
  PetsLogOutBtn,
} from './PetsBlock.styled';

export const PetsBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useSelector(selectUserProfile);

  const handleLogoutClick = useCallback(() => {
    dispatch(
      openModal({ type: 'ModalApproveAction', props: { actionType: 'logout' } })
    );
  }, [dispatch]);

  return (
    <PetsBlockContainer>
      <AddPetBlock>
        <h2>My pets</h2>
        <PetsBlockNavLink to="/add-pet">
          Add pet <span>+</span>
        </PetsBlockNavLink>
      </AddPetBlock>

      {userProfile?.pets?.length ? (
        <PetsList>
          {userProfile.pets.map(pet => (
            <li key={pet._id}>
              <MyPetsCard pet={pet} />
            </li>
          ))}
        </PetsList>
      ) : (
        <NotFoundMessage>You haven't added any animals yet.</NotFoundMessage>
      )}

      <PetsLogOutBtn onClick={handleLogoutClick}>Log Out</PetsLogOutBtn>
    </PetsBlockContainer>
  );
};
