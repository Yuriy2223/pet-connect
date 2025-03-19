import { openModal } from '../../redux/modal/slice';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { selectUserProfile } from '../../redux/user/selectors';
import { MyPetsCard } from '../MyPetsCard/MyPetsCard';
import { useAppDispatch } from '../../redux/store';
import {
  AddPetBlock,
  PetsBlockContainer,
  PetsBlockNavLink,
  PetsItem,
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

      <PetsList>
        {userProfile?.pets?.map(pet => (
          <PetsItem key={pet._id}>
            <MyPetsCard pet={pet} />
          </PetsItem>
        ))}
      </PetsList>

      <PetsLogOutBtn onClick={handleLogoutClick}>Log Out</PetsLogOutBtn>
    </PetsBlockContainer>
  );
};
