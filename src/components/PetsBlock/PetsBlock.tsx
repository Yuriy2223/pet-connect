import { openModal } from '../../redux/modal/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../redux/user/selectors';
import { MyPetsCard } from '../MyPetsCard/MyPetsCard';
import {
  AddPetBlock,
  PetsBlockContainer,
  PetsBlockNavLink,
  PetsItem,
  PetsList,
  PetsLogOutBtn,
} from './PetsBlock.styled';
import { useCallback } from 'react';

export const PetsBlock: React.FC = () => {
  const dispatch = useDispatch();
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
